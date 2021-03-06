from flask import Blueprint, request
from flask_login import login_required
from app.models import db, Cheep, User, CheepPhoto, Mention
from app.forms.edit_cheep_form import EditCheepForm
from app.validators import validation_errors_to_error_messages
import maya
import boto3
import re
from app.config import Config

cheep_routes = Blueprint('cheeps', __name__)


@cheep_routes.route('')
@login_required
def cheeps():
    cheeps = Cheep.query.all()
    return {'Cheeps': [cheep.to_dict() for cheep in cheeps]}

@cheep_routes.route('', methods=['POST'])
@login_required
def new_cheep():
    form = EditCheepForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = request.json
        regex = r'@(.*?) '
        usernames = re.findall(regex, data['content'])
        new_cheep = Cheep(**data)
        db.session.add(new_cheep)
        if usernames:
            for user in usernames:
                user = User.query.filter(User.username == user).all()
                if user:
                    new_mention = Mention(user_id=user[0].id, cheep_id=new_cheep.id)
                    db.session.add(new_mention)
        db.session.commit()
        return new_cheep.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@cheep_routes.route('/<int:id>')
@login_required
def single_cheep(id):
    cheep = Cheep.query.get(id)
    return cheep.to_dict()

@cheep_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_cheep(id):
    cheep = Cheep.query.get(id)
    db.session.delete(cheep)
    cheep = cheep.to_simple_dict()
    db.session.commit()
    return cheep

@cheep_routes.route('/<int:id>', methods=['PUT'])
@login_required
def edit_cheep(id):
    form = EditCheepForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = request.json
        regex = r'@(.*?) '
        usernames = re.findall(regex, data['content'])
        cheep = Cheep.query.get(id)
        cheep.update(**form.data)
        db.session.add(cheep)
        if usernames:
            for user in usernames:
                user = User.query.filter(User.username == user).all()
                if user:
                    mention = Mention.query.filter(Mention.cheep_id == id).filter(Mention.user_id == user[0].id).all()
                    if not mention:
                        new_mention = Mention(user_id=user.id, cheep_id=id)
                        db.session.add(new_mention)
        db.session.commit()
        return cheep.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@cheep_routes.route('/user/<int:id>/timeline')
@login_required
def timeline(id):
    results = []
    recheeps = []
    timeline = []
    user = User.query.get(id).to_dict()
    following = [obj['followed_id'] for obj in user['following']]
    for id in following:
        result = Cheep.query.filter(Cheep.user_id == id).all()
        user2 = User.query.get(id).to_dict()
        recheeps = [*recheeps, *user2['recheeps']]
        results = [*results, *result]
    timeline = [*timeline, *[result.to_dict() for result in results]]
    timeline = [*timeline, *user['cheeps']]
    for recheep in recheeps:
        timeline = [*timeline, recheep['cheep']]
    timeline.sort(reverse = True, key = lambda date: maya.parse(date['updated_at']))
    return {'data': timeline}

@cheep_routes.route('/<int:id>/photo', methods=["POST"])
@login_required
def cheap_photo(id):
    photo = request.files['photo']
    new_filename = f"cheep_photo:{id}"
    photo_url = f"{Config.S3_LOCATION}{new_filename}"
    S3 = boto3.client("s3", aws_access_key_id=Config.S3_KEY, aws_secret_access_key=Config.S3_SECRET)
    S3.upload_fileobj(photo, Config.S3_BUCKET, Key=new_filename, ExtraArgs={ "ACL": 'public-read', "ContentType": photo.content_type})
    new_photo = CheepPhoto(cheep_id=id, photo_url=photo_url)
    db.session.add(new_photo)
    db.session.commit()
    cheep = Cheep.query.get(id)
    return cheep.to_dict()

@cheep_routes.route('/<int:id>/photo', methods=["DELETE"])
@login_required
def delete_cheap_photo(id):
    new_filename = f"cheep_photo:{id}"
    S3 = boto3.client("s3", aws_access_key_id=Config.S3_KEY, aws_secret_access_key=Config.S3_SECRET)
    S3.delete_object(Bucket=Config.S3_BUCKET, Key=new_filename)
    cheep = Cheep.query.get(id)
    db.session.delete(cheep)
    db.session.commit()
    return cheep.to_simple_dict()

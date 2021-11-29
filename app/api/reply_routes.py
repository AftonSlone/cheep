from flask import Blueprint, request
from flask_login import login_required
from app.models import db, Reply, ReplyPhoto
from app.forms.edit_reply_form import EditReplyForm
from app.validators import validation_errors_to_error_messages
import boto3
from app.config import Config

reply_routes = Blueprint('replies', __name__)


@reply_routes.route('')
@login_required
def replies():
    replies = Reply.query.all()
    return {'replies': [reply.to_dict() for reply in replies]}

@reply_routes.route('', methods=['POST'])
@login_required
def new_reply():
        data = request.json
        new_reply = Reply(**data)
        db.session.add(new_reply)
        db.session.commit()
        return new_reply.to_dict()

@reply_routes.route('/<int:id>', methods=['PUT'])
@login_required
def edit_reply(id):
    form = EditReplyForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        reply = Reply.query.get(id)
        reply.update(**form.data)
        db.session.add(reply)
        db.session.commit()
        return reply.to_dict()

@reply_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_reply(id):
    reply = Reply.query.get(id)
    db.session.delete(reply)
    db.session.commit()
    return "success"


@reply_routes.route('/<int:id>/photo', methods=["POST"])
@login_required
def reply_photo(id):
    photo = request.files['photo']
    new_filename = f"reply_photo:{id}"
    photo_url = f"{Config.S3_LOCATION}{new_filename}"
    S3 = boto3.client("s3", aws_access_key_id=Config.S3_KEY, aws_secret_access_key=Config.S3_SECRET)
    S3.upload_fileobj(photo, Config.S3_BUCKET, Key=new_filename, ExtraArgs={ "ACL": 'public-read', "ContentType": photo.content_type})
    new_photo = ReplyPhoto(reply_id=id, photo_url=photo_url)
    db.session.add(new_photo)
    db.session.commit()
    return "Photo added"

@reply_routes.route('/<int:id>/photo', methods=["DELETE"])
@login_required
def delete_reply_photo(id):
    new_filename = f"cheep_photo:{id}"
    S3 = boto3.client("s3", aws_access_key_id=Config.S3_KEY, aws_secret_access_key=Config.S3_SECRET)
    S3.delete_object(Bucket=Config.S3_BUCKET, Key=new_filename)
    reply = Reply.query.get(id)
    db.session.delete(reply)
    db.session.commit()
    return "success"

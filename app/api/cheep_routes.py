from flask import Blueprint, request
from flask_login import login_required
from app.models import db, Cheep, User
from app.forms.edit_cheep_form import EditCheepForm
from app.validators import validation_errors_to_error_messages
import maya
import datetime

cheep_routes = Blueprint('cheeps', __name__)


@cheep_routes.route('/')
# @login_required
def cheeps():
    cheeps = Cheep.query.all()
    return {'Cheeps': [cheep.to_dict() for cheep in cheeps]}

@cheep_routes.route('/<int:id>')
# @login_required
def single_cheep(id):
    cheep = Cheep.query.get(id)
    return cheep.to_dict()

@cheep_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_cheep(id):
    cheep = Cheep.query.get(id)
    db.session.delete(cheep)
    db.session.commit()
    return "success"

@cheep_routes.route('/<int:id>', methods=['PUT'])
# @login_required
def edit_cheep(id):
    form = EditCheepForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        cheep = Cheep.query.get(id)
        cheep.update(**form.data)
        db.session.add(cheep)
        db.session.commit()
        return cheep.to_dict()

@cheep_routes.route('/user/<int:id>/timeline')
# @login_required
def timeline(id):
    results = []
    user = User.query.get(id).to_dict()
    following = [obj['followed_id'] for obj in user['following']]
    for id in following:
        result = Cheep.query.filter(Cheep.user_id == id).all()
        results = [*results, *result]
    timeline = [result.to_dict() for result in results]
    timeline = [*timeline, *user['cheeps']]
    timeline.sort(reverse = True, key = lambda date: maya.parse(date['updated_at']))
    return {'data': timeline}

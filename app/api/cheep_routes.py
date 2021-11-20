from flask import Blueprint, request
from flask_login import login_required
from app.models import db, Cheep, User
from app.forms.edit_user_form import EditUserForm
from app.validators import validation_errors_to_error_messages

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

@cheep_routes.route('/user/<int:id>/timeline')
# @login_required
def timeline(id):
    results = []
    user = User.query.get(id).to_dict()
    following = [obj['followed_id'] for obj in user['following']]
    for id in following:
        result = Cheep.query.filter(Cheep.user_id == id).all()
        results = [*results, *result]
    return {'data': [result.to_dict() for result in results]}

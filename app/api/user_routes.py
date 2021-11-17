from flask import Blueprint, request
from flask_login import login_required
from app.models import db, User
from app.forms.edit_user_form import EditUserForm
from app.validators import validation_errors_to_error_messages

user_routes = Blueprint('users', __name__)


@user_routes.route('')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()

@user_routes.route('/<int:id>', methods=['PUT'])
@login_required
def update_user(id):
    form = EditUserForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        user = User.query.get(id)
        print(form.data)
        user.update(**form.data)
        db.session.add(user)
        db.session.commit()
        return user.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@user_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_user(id):
    user = User.query.get(id)
    db.session.delete(user)
    db.session.commit()
    return "success"

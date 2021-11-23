from flask import Blueprint, request
from flask_login import login_required
from app.models import db, Reply
from app.forms.edit_reply_form import EditReplyForm
from app.validators import validation_errors_to_error_messages
import maya
import datetime

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
# @login_required
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

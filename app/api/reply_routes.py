from flask import Blueprint, request
from flask_login import login_required
from app.models import db, Reply
from app.validators import validation_errors_to_error_messages
import maya
import datetime

reply_routes = Blueprint('replies', __name__)


@reply_routes.route('')
# @login_required
def cheeps():
    replies = Reply.query.all()
    return {'replies': [reply.to_dict() for reply in replies]}

@reply_routes.route('', methods=['POST'])
@login_required
def new_cheep():
        data = request.json
        new_reply = Reply(**data)
        db.session.add(new_reply)
        db.session.commit()
        return new_cheep.to_dict()

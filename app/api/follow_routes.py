from flask import Blueprint, request
from flask_login import login_required
from app.models import db, Follow


follow_routes = Blueprint('follows', __name__)


@follow_routes.route('', methods=['POST'])
@login_required
def post_likes():
    data = request.json
    new_follow = Follow(**data)
    db.session.add(new_follow)
    db.session.commit()
    return "success"


@follow_routes.route('/delete', methods=['DELETE'])
@login_required
def delete_follows():
    data = request.json
    follow = Follow.query.filter(data['follower_id'] == Follow.follower_id).filter(data['followed_id'] == Follow.followed_id).one()
    db.session.delete(follow)
    db.session.commit()
    return "success"

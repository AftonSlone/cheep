from flask import Blueprint, request
from flask_login import login_required
from app.models import db, CheepLikes, Cheep


like_routes = Blueprint('likes', __name__)


@like_routes.route('', methods=['POST'])
def post_likes():
    data = request.json
    new_like = CheepLikes(**data)
    db.session.add(new_like)
    db.session.commit()
    cheep = Cheep.query.get(data['cheep_id'])
    return cheep.to_dict()


@like_routes.route('/<int:id>', methods=['DELETE'])
def delete_likes(id):
    data = request.json
    like = CheepLikes.query.filter(data['user_id'] == CheepLikes.user_id).filter(data['cheep_id'] == CheepLikes.cheep_id).one()
    db.session.delete(like)
    db.session.commit()
    cheep = Cheep.query.get(data['cheep_id'])
    return cheep.to_dict()

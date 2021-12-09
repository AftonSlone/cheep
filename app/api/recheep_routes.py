from flask import Blueprint, request
from flask_login import login_required
from app.models import db, Recheeps, Cheep


recheep_routes = Blueprint('recheeps', __name__)


@recheep_routes.route('', methods=['POST'])
@login_required
def post_recheep():
    data = request.json
    new_recheep = Recheeps(**data)
    db.session.add(new_recheep)
    db.session.commit()
    cheep = Cheep.query.get(data['cheep_id'])
    return cheep.to_dict()


@recheep_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_recheep(id):
    data = request.json
    recheep = Recheeps.query.filter(data['user_id'] == Recheeps.user_id).filter(data['cheep_id'] == Recheeps.cheep_id).one()
    db.session.delete(recheep)
    db.session.commit()
    cheep = Cheep.query.get(data['cheep_id'])
    return cheep.to_dict()

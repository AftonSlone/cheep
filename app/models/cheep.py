from sqlalchemy.orm import backref
from .db import db
from .cheep_like import cheep_likes
import datetime


class Cheep(db.Model):
    __tablename__ = 'cheeps'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    content = db.Column(db.String, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)

    user = db.relationship("User", backref="cheeps")
    photos = db.relationship("CheepPhoto")
    replies = db.relationship("Reply")
    likes = db.relationship("User", secondary=cheep_likes)
    recheeps = db.relationship("User", secondary=cheep_likes)

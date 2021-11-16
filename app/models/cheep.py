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

    user = db.relationship("User", back_populates="cheeps")
    photos = db.relationship("CheepPhoto", back_populates="cheep")
    replies = db.relationship("Reply", back_populates="cheep")
    # likes = db.relationship("User", secondary=cheep_likes)
    # recheeps = db.relationship("User", secondary=cheep_likes)

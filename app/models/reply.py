from sqlalchemy.orm import backref
from .db import db
import datetime


class Reply(db.Model):
    __tablename__ = 'replies'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    cheep_id = db.Column(db.Integer, db.ForeignKey("cheeps.id"), nullable=False)
    content = db.Column(db.String, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)

    cheep = db.relationship("Cheep", backref="replies")
    user = db.relationship("User", backref="replies")
    photos = db.relationship("ReplyPhoto")

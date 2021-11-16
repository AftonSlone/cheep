from .db import db
import datetime


class ReplyPhoto(db.Model):
    __tablename__ = 'reply_photos'

    id = db.Column(db.Integer, primary_key=True)
    reply_id = db.Column(db.Integer, db.ForeignKey("replies.id"), nullable=False)
    photo_url = db.Column(db.String, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)

    reply = db.relationship("Reply", backref="photos")

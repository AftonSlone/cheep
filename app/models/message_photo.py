from .db import db
import datetime


class MessagePhoto(db.Model):
    __tablename__ = 'message_photos'

    id = db.Column(db.Integer, primary_key=True)
    message_id = db.Column(db.Integer, db.ForeignKey("messages.id"), nullable=False)
    photo_url = db.Column(db.String, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)

    message = db.relationship("Message", back_populates="photos")

    def to_dict(self):
        return {
            'id': self.id,
            'message_id': self.message_id,
            'photo_url': self.photo_url,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'reply': self.reply.to_simple_dict()
        }

    def to_simple_dict(self):
        return {
            'id': self.id,
            'message_id': self.message_id,
            'photo_url': self.photo_url,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
        }

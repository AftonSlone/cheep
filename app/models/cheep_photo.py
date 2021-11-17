from .db import db
import datetime


class CheepPhoto(db.Model):
    __tablename__ = 'cheep_photos'

    id = db.Column(db.Integer, primary_key=True)
    cheep_id = db.Column(db.Integer, db.ForeignKey("cheeps.id"), nullable=False)
    photo_url = db.Column(db.String, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)

    cheep = db.relationship("Cheep", back_populates="photos")

    def to_dict(self):
        return {
            'id': self.id,
            'cheep_id': self.cheep_id,
            'photo_url': self.photo_url,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'reply': self.reply.to_simple_dict()
        }

    def to_simple_dict(self):
        return {
            'id': self.id,
            'cheep_id': self.cheep_id,
            'photo_url': self.photo_url,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
        }

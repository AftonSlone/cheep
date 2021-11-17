from .db import db
import datetime


class Reply(db.Model):
    __tablename__ = 'replies'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    cheep_id = db.Column(db.Integer, db.ForeignKey("cheeps.id"), nullable=False)
    content = db.Column(db.String(280), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)

    cheep = db.relationship("Cheep", back_populates="replies")
    user = db.relationship("User", back_populates='replies')
    photos = db.relationship("ReplyPhoto", back_populates="reply")

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'cheep_id': self.cheep_id,
            'content': self.content,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'cheep': self.cheep.to_simple_dict(),
            'user': self.user.to_simple_dict(),
            'photos': [photo.to_simple_dict() for photo in self.photos]
        }

    def to_simple_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'cheep_id': self.cheep_id,
            'content': self.content,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
        }

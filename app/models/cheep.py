from .db import db
import datetime


class Cheep(db.Model):
    __tablename__ = 'cheeps'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    content = db.Column(db.String(280), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)

    user = db.relationship("User", back_populates="cheeps")
    photos = db.relationship("CheepPhoto", back_populates="cheep")
    replies = db.relationship("Reply", back_populates="cheep")
    likes = db.relationship("CheepLikes")
    recheeps = db.relationship("Recheeps")

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'content': self.content,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'user': self.user.to_dict(),
            'photos': [photo.to_simple_dict() for photo in self.photos],
            'replies': [reply.to_simple_dict() for reply in self.replies],
            'likes': [like.to_dict() for like in self.likes],
            'recheeps': [recheep.to_dict() for recheep in self.recheeps]
        }

    def to_simple_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'content': self.content,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
        }

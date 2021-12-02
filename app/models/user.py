from sqlalchemy.orm import backref
from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
import datetime
from .follow import Follow




class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    name = db.Column(db.String)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    profile_photo = db.Column(db.String, default='https://icon-library.com/images/default-profile-icon/default-profile-icon-24.jpg')
    bio = db.Column(db.Text)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)

    followers = db.relationship('Follow', primaryjoin=id==Follow.followed_id )
    following = db.relationship('Follow', primaryjoin=id==Follow.follower_id )
    cheeps = db.relationship('Cheep', back_populates='user')
    replies = db.relationship('Reply', back_populates='user')
    messages = db.relationship("Message", back_populates='user')
    likes = db.relationship("CheepLikes")
    recheeps = db.relationship("Recheeps")
    mentions = db.relationship('Mention')

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'name': self.name,
            'email': self.email,
            'profile_photo': self.profile_photo,
            'bio': self.bio,
            'following': [follow.to_dict() for follow in self.following],
            'followers': [follower.to_dict() for follower in self.followers],
            'likes': [like.to_dict() for like in self.likes],
            'cheeps': [cheep.to_simple_dict() for cheep in self.cheeps],
            'replies': [reply.to_simple_dict() for reply in self.replies],
            'messages': [message.to_simple_dict() for message in self.messages],
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }

    def to_simple_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'name': self.name,
            'email': self.email,
            'profile_photo': self.profile_photo,
            'bio': self.bio,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }

    def update(self, username=None, email=None, name=None, bio=None, profile_photo=None,  **kwargs):
        self.username = username if username else self.username
        self.email = email if email else self.email
        self.name = name if name else self.name
        self.bio = bio if bio else self.bio
        self.profile_photo = profile_photo if profile_photo else self.profile_photo
        return self

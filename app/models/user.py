from sqlalchemy.orm import backref
from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
import datetime
from .follow import follows
from .cheep_like import cheep_likes




class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    name = db.Column(db.String)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    profile_photo = db.Column(db.String)
    bio = db.Column(db.Text)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)

    followers = db.relationship('User', secondary=follows, primaryjoin=(follows.c.follower_id == id), secondaryjoin=(follows.c.followed_id == id), lazy="dynamic")
    cheeps = db.relationship('Cheep')
    replies = db.relationship('Reply')
    messages = db.relationship("Message")
    likes = db.relationship("Cheep", secondary=cheep_likes, backref="likes")
    recheeps = db.relationship("Cheep", secondary=cheep_likes, backref="recheeps")

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
            'email': self.email
        }

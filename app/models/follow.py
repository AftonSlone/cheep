from .db import db


class Follow(db.Model):
    __tablename__ = 'follows'

    follower_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False, primary_key=True)
    followed_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False, primary_key=True)


    def to_dict(self):
        return {
            'follower_id': self.follower_id,
            'followed_id': self.followed_id
            }

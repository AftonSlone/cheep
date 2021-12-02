from .db import db


class Mention(db.Model):
    __tablename__ = 'mentions'

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False, primary_key=True)
    cheep_id = db.Column(db.Integer, db.ForeignKey('cheeps.id'), nullable=False, primary_key=True)

    cheep = db.relationship("Cheep")



    def to_dict(self):
        return {
            'user_id': self.user_id,
            'cheep_id': self.cheep_id,
            'cheep': self.cheep.to_simple_dict()
            }

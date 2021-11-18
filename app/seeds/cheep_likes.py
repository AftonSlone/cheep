from app.models import db, CheepLikes
from random import randint


# Adds a demo user, you can add other users here if you want
def seed_likes():

    for i in range(210):
        for j in range(21):
            new_like = CheepLikes(user_id=j+1, cheep_id=i+1)
            db.session.add(new_like)




    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_likes():
    db.session.execute('TRUNCATE cheep_likes RESTART IDENTITY CASCADE;')
    db.session.commit()

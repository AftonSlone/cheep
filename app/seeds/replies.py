from app.models import db, Reply
from faker import Faker
from random import randint

fake = Faker()
def random_replies(i):
    new_reply = Reply(user_id=randint(2, 21), cheep_id=i+1, content=fake.text())
    db.session.add(new_reply)

# Adds a demo user, you can add other users here if you want
def seed_replies():
    for _ in range(210):
        for i in range(5):
            random_replies(i)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_replies():
    db.session.execute('TRUNCATE replies RESTART IDENTITY CASCADE;')
    db.session.commit()

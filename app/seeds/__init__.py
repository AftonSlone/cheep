from re import S
from flask.cli import AppGroup
from .users import seed_users, undo_users
from .follows import seed_follows, undo_follows
from .cheeps import seed_cheeps, undo_cheeps
from .cheep_likes import seed_likes, undo_likes
from .replies import seed_replies, undo_replies

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_follows()
    seed_cheeps()
    seed_likes()
    seed_replies()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_follows()
    undo_cheeps()
    undo_likes()
    undo_replies()
    # Add other undo functions here

from flask_wtf import FlaskForm
from wtforms import StringField, EmailField, BooleanField, PasswordField
from wtforms.validators import DataRequired
from app.validators import email_exists, username_exists


class EditUserForm(FlaskForm):
    name = StringField('name')
    bio = StringField('bio')

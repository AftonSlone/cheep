from flask_wtf import FlaskForm
from wtforms import StringField, EmailField, BooleanField, PasswordField
from wtforms.validators import DataRequired, Length
from app.validators import email_exists, username_exists


class EditUserForm(FlaskForm):
    name = StringField('name', validators=[Length(min=3, max=25), DataRequired()])
    bio = StringField('bio', validators=[Length(max=500)])

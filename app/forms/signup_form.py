from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email
from app.validators import user_exists, username_exists





class SignUpForm(FlaskForm):
    username = StringField('username', validators=[DataRequired(), username_exists])
    email = StringField('email', validators=[DataRequired(), Email(granular_message=True), user_exists])
    password = StringField('password', validators=[DataRequired()])

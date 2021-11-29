from datetime import datetime
from flask_wtf import FlaskForm
from wtforms.validators import Length, DataRequired
from wtforms import StringField, DateTimeField
import datetime


class EditCheepForm(FlaskForm):
    content = StringField('content', validators=[DataRequired(), Length(max=280)])
    updated_at = DateTimeField('updated_at', default=datetime.datetime.utcnow)

from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired


class UpdateBooking(FlaskForm):
    startDate = StringField('start_date', validators=[DataRequired()])
    endDate = StringField('end_date', validators=[DataRequired()])
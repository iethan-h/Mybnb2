from flask_wtf import FlaskForm
from wtforms import IntegerField, DateField, DateTimeField
from wtforms.validators import DataRequired

class UpdateBooking(FlaskForm):
    startDate = DateTimeField("start_date", validators=[DataRequired()])
    endDate = DateTimeField("end_date", validators=[DataRequired()])
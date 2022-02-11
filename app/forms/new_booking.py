from flask_wtf import FlaskForm
from wtforms import IntegerField, DateField, DateTimeField, StringField
from wtforms.validators import DataRequired

class NewBooking(FlaskForm):
    userId = IntegerField("user_id", validators=[DataRequired()])
    locationId = IntegerField("location_id", validators=[DataRequired()])
    startDate = StringField("start_date", validators=[DataRequired()])
    endDate = StringField("end_date", validators=[DataRequired()])
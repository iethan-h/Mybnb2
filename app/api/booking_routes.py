from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, Location, Booking
from app.forms.new_booking import NewBooking
from app.forms.update_booking import UpdateBooking

booking_routes = Blueprint('bookings',__name__)


    
#GET ALL BOOKINGS IN DATABASE
@booking_routes.route('', methods=['GET'])
def databaseBookings():
    bookings = Booking.query.all()
    return {booking.id:booking.to_dict() for booking in bookings}
    
#GET ALL BOOKINGS FOR A USER
@booking_routes.route('/user/<int:userId>')
# @login_required
def user_bookings(userId):
    bookings = Booking.query.filter(Booking.userId == userId).all()
    results = [booking.booking_info() for booking in bookings]
    return {'bookings':results}

#CREATE A NEW BOOKING  
@booking_routes.route('',methods=['POST'])
@login_required
def new_booking():
    form = NewBooking()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        booking = Booking(**request.json)
        db.session.add(booking)
        db.session.commit()
        return booking.to_dict()
    else:
        return form.errors
        
@booking_routes.route('/<int:bookingId>',methods=['PUT'])
# @login_required
def update_booking(bookingId):
    form = UpdateBooking()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        booking_edit = Booking.query.get(bookingId)
        booking_edit.startDate = form.data["startDate"]
        booking_edit.endDate = form.data["endDate"]
        db.session.commit()
        return booking_edit.to_dict()
    else:
        return form.errors
    
    
#DELETE A BOOKING
@booking_routes.route('/<int:bookingId>',methods=['DELETE'])
# @login_required
def delete_booking(bookingId):
    booking = Booking.query.get(bookingId)
    db.session.delete(booking)
    db.session.commit()
    return booking.to_dict()
        

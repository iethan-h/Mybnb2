from .db import db

class Booking(db.Model):
    
    __tablename__ = "bookings"
    
    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    locationId = db.Column(db.Integer, db.ForeignKey('locations.id'), nullable=False)
    startDate = db.Column(db.DateTime,nullable=False)
    endDate = db.Column(db.DateTime,nullable=False)
    
    #relationships
    
    user = db.relationship('User', back_populates='booking')
    locations = db.relationship('Location', back_populates='booking')
    
    def to_dict(self):
        return {
            'id': self.id,
            'locationId': self.locationId,
            'userId': self.userId,
            'startDate': self.startDate,
            'endDate': self.endDate,
        }
        
    def booking_info(self):
        return {
            'id':self.id,
            'user_id':self.userId,
            'location_id':self.locationId,
            'locations':self.locations.booking_info(),
            'start':self.startDate,
            'end':self.endDate
        }
        

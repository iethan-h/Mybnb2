from .db import db

class Image(db.Model):
    
    __tablename__ = 'images'
    
    id = db.Column(db.Integer, primary_key=True)
    locationId = db.Column(db.Integer, db.ForeignKey('locations.id'), nullable=False)
    reviewId = db.Column(db.Integer, db.ForeignKey('reviews.id'))
    createdAt = db.Column(db.DateTime(timezone=True))
    updatedAt = db.Column(db.DateTime(timezone=True))
    
    #relationships
    
    reviews = db.relationship('Review', back_populates='images')
    locations =db.relationship('Location',back_populates='images')
    
    def to_dict(self):
        return {
            'id': self.id,
            'locationId': self.locationId,
            'reviewId': self.reviewId,
            'createdAt': self.createdAt.strftime("%Y/%m/%d %H:%M:%S"),
            'updatedAt': self.updatedAt.strftime("%Y/%m/%d %H:%M:%S")
        }
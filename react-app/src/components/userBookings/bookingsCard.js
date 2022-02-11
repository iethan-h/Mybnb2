import LocationCard from '../locations/locationCard'
import { Link } from 'react-router-dom';
import {deleteBooking, editBooking} from '../../store/booking'
import { useState, useEffect } from 'react'
import { useDispatch} from "react-redux";
import { Modal } from '../../context/Modal';
import EditBooking from './editBooking'


const BookingCard = ({booking,user}) =>{
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const handleDeleteBooking = async (e) =>{
        e.preventDefault()
        dispatch(deleteBooking(booking?.id))
        
    }
    return(
        <>
            
                <div className='one_location' >
                    <Link to={`/locations/${booking.locations?.id}`} className="one_location_li">
                        <div className="locationImage">
                            <img className="locationImg" src={booking.locations?.image} alt=""/>
                        </div>
                        <div className="locationCountry">
                            <p className="one_location_li">Start date: {booking.start}</p>
                        </div>
                        <div className="locationCountry">
                            <p className="one_location_li">End date: {booking.end}</p>
                        </div>
                    </Link>
                        <div>
                            <button onClick={() => setShowModal(true)}>Change date</button>
                                {showModal && (
                                    <Modal onClose={() => setShowModal(false)}>
                                        <EditBooking  setShowModal={setShowModal}  booking={booking}/>
                                    </Modal>
                                )}
                                
                            <button onClick={handleDeleteBooking}>Cancel booking</button>
                        </div>
                        
                </div>
                
            
        </>
        
    )
}
export default BookingCard
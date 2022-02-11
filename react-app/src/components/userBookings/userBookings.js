import { useSelector, useDispatch } from 'react-redux'
// import { useParams } from 'react-router'
import {NavLink} from 'react-router-dom'
import LogoutButton from '../auth/LogoutButton'
// import LocationCard from '../locations/locationCard'
import { useEffect } from 'react';
import BookingsContainer from './bookingsContainer'
import {userBookings} from '../../store/booking'

const BookingPage = () =>{
    const dispatch = useDispatch()
    const user = useSelector(state => state.session?.user)
    const bookings = useSelector(state => Object.values(state.booking))
    useEffect(()=>{
        dispatch(userBookings(user?.id))
    },[dispatch,user])
    
    console.log('these are the bookings',Array.isArray(bookings));
    
    return(
        <>
        <div className = "bookings_body">
            <BookingsContainer bookings={bookings} user={user}/>
        </div>
        </>
    )
}

export default BookingPage
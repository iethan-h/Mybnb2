// import { useSelector, useDispatch } from 'react-redux'
// import { useParams } from 'react-router'
// import {NavLink} from 'react-router-dom'
// import { useEffect, useState } from 'react';
import BookingCard from './bookingsCard'
import './bookings.css'


const BookingsContainer = ({bookings,user}) =>{
    // const [showPast, setShowPast] = useState(false);
    // const [upComing, setUpcoming] = useState([])
    // const [oldBooking, setOldBooking] = useState([])
    // useEffect(()=>{
    //     let pastBookings = [];
    //     let upComingBookings = [];
    //     let today = new Date()
    //     console.log('bookings',bookings)
    //     for (let theBooking of bookings){
    //         let date = new Date(theBooking.start.slice(5,16))
    //      if(date < today){
    //          pastBookings.push(theBooking)
    //      }else{
    //          upComingBookings.push(theBooking)
    //      }
    //     }
    //     upComingBookings.sort(function(a,b){
    //         return new Date(a.date) - new Date(b.date)
    //     })
    //     pastBookings.sort(function(a,b){
    //         return new Date(b.date) - new Date(a.date)
    //     })
    //     setOldBooking(pastBookings)
    //     setUpcoming(upComingBookings)
    // },[bookings])
   return(
    <>
        {/* check if the user has a booking or not */}
        {bookings.length === 0 ?(
            <p className="userBookingConfirm"> Looks like you have no upcoming bookings</p>
        ):<>
        <div className="userBookingConfirm">
            <h1>Here are your bookings</h1>
           
        </div> 
        <hr/>
        <div className="allUserBookings">
            {bookings.map(booking=>
            <BookingCard booking={booking} user={user}/>)}
        </div>
        
        </>
        }
    </>
    )
}

export default BookingsContainer
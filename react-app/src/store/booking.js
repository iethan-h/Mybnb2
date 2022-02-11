const ADD_BOOKING = '/bookings/ADD_BOOKING'
const GET_ONE_BOOKING = '/bookings/GET_ONE_BOOKING'
const GET_ALL_BOOKINGS = '/bookings/GET_ALL_BOOKINGS'
const REMOVE_BOOKING = '/bookings/REMOVE_BOOKING'
const EDIT_BOOKING = '/bookings/EDIT_BOOKING'

/*-------------ACTIONS-------------*/

const addBooking = (booking) =>({
    type:ADD_BOOKING,
    
    booking
})

const getOneBooking = (booking) =>({
    type:GET_ONE_BOOKING,
    
    booking
})

const getAllBookings = (booking) =>({
    type:GET_ALL_BOOKINGS,
    
    booking
})

const removeBooking = (booking) =>({
    type:REMOVE_BOOKING,
    
    booking
})

const editABooking = (booking) =>({
    type:EDIT_BOOKING,
    
    booking
})

/*-------------THUNKS-------------*/

export const newBooking = (booking) => async (dispatch) => {
    const res = await fetch("/api/bookings", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(booking)
    })
    if (res.ok){
        const booking = await res.json()
        dispatch(addBooking(booking))
        return booking
    }
}
//GET ALL BOOKINGS FOR A SINGLE LOCATION
export const locationBookings = (locationId) => async(dispatch)=> {
    const res = await fetch(`/api/bookings/${locationId}/`)
    if (res.ok) {
        const bookings = await res.json()
        dispatch(getAllBookings(bookings))
    }
}

export const getBooking = (bookingId) => async (dispatch) => {
    const res = await fetch(`/api/bookings/${bookingId}`)
    const oneBooking= await res.json();
    dispatch(getOneBooking(oneBooking))
}

//GET ALL BOOKINGS FOR A SINGLE USER
export const userBookings = (userId) => async (dispatch) => {
    const res =  await fetch(`/api/bookings/user/${userId}`)
    const data = await res.json();
    dispatch(getAllBookings(data))
}

//UPDATE A BOOKING
export const editBooking = (booking,bookingId) => async (dispatch) => {
    const response = await fetch(`/api/bookings/${bookingId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(booking),
      });
      if (response.ok) {
        const data = await response.json();
        dispatch(editABooking(data));
        return data
      }
}

export const deleteBooking = (bookingId) => async (dispatch) =>{
    const response = await fetch(`/api/bookings/${bookingId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json',}
    })
    dispatch(removeBooking(bookingId))
    return response;
}

/*-------------REDUCER-------------*/

const BookingsReducer = (state = {}, action) =>{
    switch(action.type) {
        
        case GET_ALL_BOOKINGS:
            const allBookings = {};
            
            for(let myBookings of action.booking.bookings){
                allBookings[myBookings.id] = myBookings
            }
            return{...allBookings}
            // return {...state,
            // ...action.booking};
            
            
        case ADD_BOOKING:
            return {
                ...state,
                [action.booking?.id]: action.booking
            }
            
            
        case REMOVE_BOOKING: {
            const newState = { ...state };
            delete newState[action.booking];
            return newState;
            }
            
            
        case EDIT_BOOKING: {
            return{
            ...state,
            [action.booking.id]: action.booking
        }}
        
        
        case GET_ONE_BOOKING:
            return {
                ...state,
             [action.booking.id]: action.booking
         }
         
         
        default:
            return state;
    }
}

export default BookingsReducer

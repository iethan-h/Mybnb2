// import DatePicker from 'react-calendar';
import { useEffect,useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router'
import {editBooking} from '../../store/booking'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const EditBooking = ({booking}) =>{
    const dispatch = useDispatch();
    // const [showCalendar, setShowCalendar] = useState(false)
    const {locationId} = useParams();
    const [startDate,setStartDate] = useState(new Date())
    const [endDate,setEndDate] = useState(startDate)
    const userId = useSelector((state) => state.session?.user?.id);
    const bookingId = booking.id
    console.log('this is the booking id',bookingId)
    
    useEffect(()=>{
        console.log(startDate, endDate)
    },[startDate,endDate])

    const handleEditBooking = async (e) => {
        e.preventDefault();
        const payload = {
            userId,
            locationId,
            startDate: startDate.toDateString(),
            endDate:endDate.toDateString(),
        }
        dispatch(editBooking(payload,bookingId))
        window.location.reload(true);
    }
    
    return(
        <>
        
        <div>
            <p>Book this location</p>
        </div>
        <div>
            <form>
                <div>
                <Calendar selectRange={true} onChange={([startDate, endDate]) => {            
                setStartDate(startDate)
                setEndDate(endDate)
                }
            }
                />
                </div>
                <button type='submit' onClick={handleEditBooking}>Submit</button>
            </form>
        </div>
        </>
    )
}
export default EditBooking
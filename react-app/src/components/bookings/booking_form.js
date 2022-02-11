// import DatePicker from 'react-calendar';
import { useEffect,useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router'
import {newBooking} from '../../store/booking'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


function BookingForm({locationInfo}){
    const dispatch = useDispatch();
    // const [showCalendar, setShowCalendar] = useState(false)
    const {locationId} = useParams();
    const [startDate,setStartDate] = useState(new Date())
    const [endDate,setEndDate] = useState(startDate)
    const userId = useSelector((state) => state.session?.user?.id);
    
    useEffect(()=>{
        console.log(startDate, endDate)
    },[startDate,endDate])

    const handleBooking = async (e) => {
        e.preventDefault();
        const payload = {
            userId,
            locationId,
            startDate: startDate.toDateString(),
            endDate:endDate.toDateString(),
        }
        dispatch(newBooking(payload))
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
                <button type='submit' onClick={handleBooking}>Submit</button>
            </form>
        </div>
        </>
    )
}
export default BookingForm
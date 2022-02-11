import {useState} from 'react'
import {useSelector} from 'react-redux'
import { useParams } from 'react-router'
import { Modal } from '../../context/Modal';
import EditLocation from '../editLocation/editLocation'

const UpdateLocation = () =>{
    const [showModal, setShowModal] = useState(false);

    const {locationId} = useParams()
    
    const locationInfo = useSelector(state => state.location[locationId])
    
    return(
        <>
        <button onClick={() => setShowModal(true)}>Edit Location</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditLocation locationId={locationId} locationInfo={locationInfo} setShowModal={setShowModal}/>
                </Modal>
            )}
    </>
    )
}

export default UpdateLocation
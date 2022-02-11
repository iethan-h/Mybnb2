import React, { useState } from 'react';
import {useSelector} from 'react-redux'
import { Modal } from '../../context/Modal';
import ReviewForm from './newReview'


const NewReview = () =>{
    const reviews = useSelector(state => Object.values(state.location))
    const [showModal, setShowModal] = useState(false);
    
        return(
            <>
            <div>
                <button onClick={() => setShowModal(true)}>Write a new story</button>
                    {showModal && (
                        <Modal onClose={() => setShowModal(false)}>
                            <ReviewForm  setShowModal={setShowModal}/>
                        </Modal>
                    )}
            </div>
        </>
        )
    
}
export default NewReview
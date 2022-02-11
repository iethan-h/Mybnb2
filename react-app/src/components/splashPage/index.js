/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import './splash.css'
import ReactTypingEffect from 'react-typing-effect';
import { useEffect } from 'react';

const Splash = () => {
    return(
        <div className="background-image">
            <div className="image">
                <img className='img1' src="https://loveincorporated.blob.core.windows.net/contentimages/gallery/a0b24016-8626-4c51-9016-f763a428e0c0-this-man-built-a-treehouse-1.jpg"/> 
            </div>
            <ReactTypingEffect className="name"
            text={["Mybnb","A Project By Ethan Harwell"]}
            eraseDelay={1500}
            typingDelay={1500}
            speed={200}
            />
            <div>
                <img className='img2' src='https://track-pm.s3.amazonaws.com/luxurycoastalvacations/image/1d88c424-4f72-41c2-afda-2992b51b42c0'/>
            </div>
        </div>
    );
}

export default Splash
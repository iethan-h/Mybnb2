import React from 'react';
import {  NavLink } from 'react-router-dom';
import SearchBar from './searchBar';
import LogoutButton from '../auth/LogoutButton'
import ProfileButton from './profileButton';
import { useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
import { useState } from 'react';
import NewHostForm from '../newHost/newHostForm'
import './searchBar.css'

const Header = () => {
  const user = useSelector(state => state.session.user);
  const [showModal, setShowModal] = useState(false);
  return (
    <>
    <header>
      <div className='logged_in_nav'>
            <div>
                <NavLink className='browse' to='/home'>
                  <div className="logo">Mybnb</div>
                </NavLink>
            </div>
            <SearchBar />
            <div> 
            <button onClick={() => setShowModal(true)} style={{fontSize:"25px"}}>Be a host</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <NewHostForm  setShowModal={setShowModal}/>
                </Modal>
            )}
            </div>
            <div>
            <ProfileButton user={user}/>
            </div>
        
        </div>
    </header>
    </>
  );
}

export default Header;

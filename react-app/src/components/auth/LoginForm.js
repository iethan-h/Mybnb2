import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import './signup.css'
 
const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/home' />;
  }
  
  const demoLogin = (e) => {
    e.preventDefault();
    const email = "demo@aa.io";
    const password = "password";
    dispatch(login(email, password));
};

if (user) {
  return <Redirect to='/home' />;
}


  return (
    
    <div className='page'>
      <a className='home-link' href='/'>Home</a>
      <img className='cabin' src='https://wallpaperaccess.com/full/2694375.jpg' alt=''/>
      <div className='center'>
        <h1 style={{color:'white'}}>Welcome back!</h1>
        <form onSubmit={onLogin}>   
          <div>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
         <div className='content'>
          
          <input
            name='email'
            type='text'
            placeholder='Email'
            value={email}
            onChange={updateEmail}
          />
        </div>
          <div  className='content'>
          <input
            name='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={updatePassword}
          />
          </div>
          <div className='submit_btn'>
            <button className='submit_signup' type='submit'>Log in</button>
            </div>
        </form>
        <div className='submit_btn'>
          <button className="submit_signup" onClick={demoLogin}>Demo User</button>
        </div>
        </div>
    </div>

  );
};

export default LoginForm;

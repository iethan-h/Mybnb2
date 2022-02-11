import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import './signup.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    }
    else{
      return setErrors([
        "Confirm Password field must be the same as the Password field",
      ])
    }

  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/home' />;
  }
  
  

  return (
    <div className='page'>
      <a className='home-link' href='/'>Home</a>
      <img className='cabin' src='https://wallpaperaccess.com/full/2694375.jpg' alt=''/>
      <div className='center'>
        <h1 style={{color:'white'}}>Sign up</h1>
        <form onSubmit={onSignUp}>   
          <div>
            {errors.map((error, ind) => (
              <div className="errors" key={ind}>{error}</div>
            ))}
          </div>
          <div className='content'>
            <input
              type='text'
              name='username'
              placeholder='username'
              onChange={updateUsername}
              value={username}
            ></input>
          </div>
          <div className='content'>
            <input
              type='text'
              name='email'
              placeholder='email'
              onChange={updateEmail}
              value={email}
            ></input>
          </div>
          <div className='content'>
            <input
              type='password'
              name='password'
              placeholder='password'
              onChange={updatePassword}
              value={password}
            ></input>
          </div>
          <div className='content'>
            <input
              type='password'
              name='repeat_password'
              placeholder='confirm password'
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
            ></input>
          </div>
          <div className='submit_btn'>
            <button className='submit_signup' type='submit'>Sign Up</button>
            </div>
        </form>
        </div>
    </div>
  );
};

export default SignUpForm;

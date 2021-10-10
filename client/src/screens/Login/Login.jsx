import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Login.css'

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form className='login-container' onSubmit={(e) => {
      e.preventDefault();
      props.handleLogin(formData);
    }}>
      <div className="sign-in-container">
        <h3>Login</h3>
        <label>
          Username:
          <input
            type='text'
            name='username'
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
          />
        </label>
      </div>
      <br />
      <button className='sign-in-form-button ' >Submit</button>

      <Link className='register-link' to='/register'>Register</Link>

    </form>
  );

}

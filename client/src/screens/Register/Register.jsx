import { useState } from 'react';
import "./Register.css"

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
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
    <form className='register-forms'
      onSubmit={(e) => {
        e.preventDefault();
        props.handleRegister(formData);
      }}
    >
      <div id='sign-up-form'>
        <h3>Register</h3>
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
          Email:
          <input
            type='text'
            name='email'
            value={formData.email}
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
        <br />
      </div>
      <button className='submit-button'>Submit</button>
    </form>
  );
}
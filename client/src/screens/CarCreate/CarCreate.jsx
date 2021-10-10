import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import './CarCreate.css'
export default function CarCreate(props) {
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    img_url: '',
    year: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form className='car-create-form-container' onSubmit={(e) => {
      e.preventDefault()
      props.handleCarCreate(formData);
    }}>
      <div className='car-create-container'>
        <h3>Add to Your Garage!</h3>
        <label>
          Make:
          <input
            type='text'
            name='make'
            value={formData.make}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Model:
          <input
            type='text'
            name='model'
            value={formData.model}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Image-URL:
          <input
            type='text'
            name='img_url'
            value={formData.img_url}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Year:
          <input
            type='text'
            name='year'
            value={formData.year}
            onChange={handleChange}
          />
        </label>
      </div>
      <br />
      <button className='car-create-button'>Submit</button>
    </form>
  );
}

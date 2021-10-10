import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PartCreate.css'
export default function PartCreate(props) {
  const [formData, setFormData] = useState({
    name: '',
    img_url: '',
    price: '',
    description: '',
    rating: ''
  });
  const { car_id, category_id } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <form className='part-create-form-container'
      onSubmit={(e) => {
        e.preventDefault();
        props.handlePartCreate(car_id, category_id, formData);
      }}
    >
      <div className='part-create-container'>
        <h3 className='add-part-title'>Add Part</h3>
        <label>
          Name:
          <input
            type='text'
            name='name'
            value={formData.name}
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
          Price:
          <input
            type='text'
            name='price'
            value={formData.price}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Description:
          <input
            type='text'
            name='description'
            value={formData.description}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Rating:
          <input
            type='number'
            name='rating'
            value={formData.rating}
            onChange={handleChange}
          />
        </label>
      </div>

      <button className='part-create-button'>Submit</button>
    </form>
  );
}

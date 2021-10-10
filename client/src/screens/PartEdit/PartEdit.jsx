import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PartEdit.css'

export default function PartEdit(props) {
  const [formData, setFormData] = useState({
    name: '',
    img_url: '',
    price: '',
    description: '',
    rating: ''
  });
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const singlePart = props.parts.find(part => part.id === Number(id))
      setFormData({
        name: singlePart.name,
        img_url: singlePart.img_url,
        price: singlePart.price,
        description: singlePart.description,
        rating: singlePart.rating
      });
    }
    if (props.parts.length) {
      prefillFormData();
    }
  }, [props.parts, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form className='part-edit-form-container'
      onSubmit={(e) => {
        e.preventDefault();
        props.handlePartUpdate(id, formData);
      }}
    >
      <div className='part-edit-container'>
        <h3 className='edit-part-title'>Edit Part</h3>
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
      <br />
      <button className='part-edit-page-button'>Submit</button>
    </form>
  );
}

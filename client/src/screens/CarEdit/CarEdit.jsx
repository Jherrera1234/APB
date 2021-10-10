import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './CarEdit.css'
export default function CarEdit(props) {
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    img_url: '',
    year: ''
  });
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const singleCar = props.cars.find(car => car.id === Number(id))
      setFormData({
        make: singleCar.make,
        model: singleCar.model,
        img_url: singleCar.img_url,
        year: singleCar.year

      });
    }
    if (props.cars.length) {
      prefillFormData();
    }
  }, [props.cars, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form className='car-edit-form-container'
      onSubmit={(e) => {
        e.preventDefault();
        props.handleCarUpdate(id, formData);
      }}
    >
      <div className='car-edit-container'>
        <h3 className='edit-title'>Edit Car</h3>
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
      <button className='car-edit-button'>Submit</button>
    </form>
  );
}
import { Link, useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { getUserCars } from '../../services/cars';

import './Cars.css'
export default function Cars(props) {
  const [cars, setCars] = useState(null)
  const { user_id } = useParams();

  useEffect(() => {
    const fetchCars = async () => {
      const carList = await getUserCars(user_id);
      setCars(carList);
    };
    console.log(cars)
    fetchCars();

  }, [user_id]);


  return (
    <div>
      <Card id='car-page' >
        <Card.Img id='car-card-page' src="https://images.unsplash.com/photo-1536909526839-8f10e29ba80c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJpZnRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" />
        <Card.ImgOverlay id='car-card-img-page'>
          <Card.Title>
            <h1 className='car-title'>Start and Track Your Build</h1>
          </Card.Title>

        </Card.ImgOverlay>
      </Card>
      <div className='garage-title'>
        <h1 className='garage-tag'>Garage</h1>
        <Link className='add-car-link' to='/cars/new'>
          <h1 className='add-car'>Add Car</h1>
        </Link>
      </div>
      {cars?.map((car) => (
        <div className='cars' key={car.id}>
          <Link className='car-link' to={`/cars/${car.id}`}>


            <Card id='car-card' >
              <Card.Img id='car-card-img' src={car.img_url} />
              <Card.ImgOverlay id='car-card-img-over'>
                <Card.Title id='car-make'>{car.make} </Card.Title>
                <Card.Title id='car-model'>{car.model} </Card.Title>
              </Card.ImgOverlay>
            </Card>

          </Link>
          <div className='buttons-div'>
            <Link to={`/cars/${car.id}/edit`}>
              <button className='car-page-edit-button'>Edit</button>
            </Link>
            <button className='car-delete-button' onClick={() => props.handleCarDelete(car.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
      <br />

    </div>
  );
}
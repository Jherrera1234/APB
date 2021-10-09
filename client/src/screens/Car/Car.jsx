import React from 'react'
import { useState, useEffect } from 'react';
import { useParams, Link, Route, Switch } from 'react-router-dom';
import { getOneCar } from '../../services/cars';
import { Card } from 'react-bootstrap';
import './Car.css'
import Category from '../Category/Category';
export default function Car(props) {
  const [car, setCar] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchCar = async () => {
      const carData = await getOneCar(id);
      setCar(carData);
    };
    fetchCar();
  }, [id]);

  return (
    <div>

      <Card id='car-id-page' >
        <Card.Img id='car-id-card-page' src={car?.img_url} />
        <Card.ImgOverlay id='car-id-card-img-page'>
          <Card.Title>
            <h1 className='car-id-title'>{car?.model}</h1>
          </Card.Title>
        </Card.ImgOverlay>
      </Card>

      {car?.categories.slice(0, 4).map((category) => {
        return (

          <Link className='category-link' to={`/cars/${car?.id}/categories/${category.id}`}>
            <h2 className={`${category.name}-id`} >{category.name}</h2>



          </Link>
        )
      })

      }
    </div>
  )
}

import React from 'react'
import { useState, useEffect } from 'react';
import { useParams, Link, Route, Switch } from 'react-router-dom';
import { getOneCar } from '../../services/cars';
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

      <h1>{car?.make}</h1>
      {car?.categories.slice(0, 4).map((category) => {
        return (
          <Link to={`/categories/${category.id}`}>
            <p>{category.name}</p>
            {/* <Category categoryName={category.name} /> */}
          </Link>
        )
      })

      }
    </div>
  )
}

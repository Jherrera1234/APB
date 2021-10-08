import React from 'react'
import { useState, useEffect } from 'react';
import { useParams, Link, Route, Switch } from 'react-router-dom';
import { getOneCategory } from '../../services/categories';
import { getCarParts } from '../../services/parts';

export default function Category() {
  const [categories, setCategories] = useState(null);
  const [parts, setParts] = useState([])
  const { car_id, category_id } = useParams();

  useEffect(() => {
    const fetchParts = async () => {
      const partsData = await getCarParts(car_id, category_id)
      setParts(partsData)
    }
    fetchParts();

  }, [car_id, category_id])

  //   price: null,
  // description: null,
  // img_url: null,
  // rating: null,





  return (
    <div>
      {parts?.map((part) => {
        if (part.name !== null) {
          return (
            <div>
              <img src={part.img_url} />
              <p>{part.name}</p>
              <p>{part.price}</p>
              <p>{part.description}</p>
              <p>{part.rating}</p>
              <Link to={`/parts/${part.id}/edit`}>
                <button>Edit</button>
              </Link>
            </div>
          )
        }

      })}
      <br />
      <Link to={`/parts/cars/${car_id}/categories/${category_id}`}>
        <button>Create</button>
      </Link>

    </div>
  )
}

import React from 'react'
import { useState, useEffect } from 'react';
import { useParams, Link, Route, Switch } from 'react-router-dom';
import { getOneCategory } from '../../services/categories';
import { getCarParts } from '../../services/parts';
import { Card } from 'react-bootstrap';
import './Category.css'

export default function Category(props) {
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

  useEffect(() => {
    const fetchCategory = async () => {
      const categoryData = await getOneCategory(category_id)
      setCategories(categoryData)
    }
    fetchCategory();
  }, [car_id, category_id])

  //   price: null,
  // description: null,
  // img_url: null,
  // rating: null,





  return (
    <div className='part-page'>
      <h1 className={`${categories?.name}-name`} >{categories?.name}</h1>
      <div className='category-parts'>
        <img className='left-image' src="https://images.unsplash.com/photo-1565064012199-c537fe6fb4b5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fGNhcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" />
        <div className='middle-section'>
          {parts?.map((part) => {
            if (part.name !== null) {
              return (
                <div className='part-container'>

                  <img id='part-image' src={part.img_url} />
                  <h3>Name: {part.name}</h3>
                  <h3>Price: {`$ ${part.price}`}</h3>
                  <h3>Description: {part.description}</h3>
                  <h3>Rating: {`${part.rating}/5`}</h3>


                  <Link to={`/parts/${part.id}/edit`}>
                    <button className='part-edit-button'>Edit</button>
                  </Link>
                  <button className='part-delete-button' onClick={() => props.handlePartDelete(part.id)}>
                    Delete
                  </button>
                </div>
              )
            }

          })}
          <Link to={`/parts/cars/${car_id}/categories/${category_id}`}>
            <button className='part-create-button'>Add New Part</button>
          </Link>
        </div>
        <img className='right-image' src="https://images.unsplash.com/photo-1618205062886-3976f4bb8219?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fHN1cHJhJTIwbWs1fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
      </div>
    </div>
  )
}

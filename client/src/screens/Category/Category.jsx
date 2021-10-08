import React from 'react'
import { useState, useEffect } from 'react';
import { useParams, Link, Route, Switch } from 'react-router-dom';
import { getOneCategory } from '../../services/categories';
export default function Category() {
  const [categories, setCategories] = useState(null);
  const { id } = useParams();





  useEffect(() => {
    const fetchCategory = async () => {
      const category = await getOneCategory(id);
      setCategories(category);
      console.log(category)
      console.log(categories)

    };
    fetchCategory();

  }, [id, categories]);


  return (
    <div>
      <h1>{categories?.name}</h1>
      {categories?.parts.map((part) => {
        return (
          <>
            <img src={part.img_url} />
            <p>{part.name}</p>
            <p>{part.price}</p>
            <p>{part.description}</p>
            <p>{part.rating}</p>


          </>

        )

      })

      }
    </div>
  )
}

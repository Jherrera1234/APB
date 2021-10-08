import React from 'react'
import { useState, useEffect } from 'react';
import { useParams, Link, Route, Switch } from 'react-router-dom';
import { getOneCategory } from '../../services/categories';
import { getCarParts } from '../../services/parts';

export default function Category() {
  const [categories, setCategories] = useState(null);
  const { id } = useParams();








  return (
    <div>
      <h1>test</h1>
    </div>
  )
}

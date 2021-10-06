import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { getAllCars, getOneCar, postCar, deleteCar, putCar } from '../services/cars';
import Cars from '../screens/Cars';
import CarCreate from '../screens/CarCreate';
import CarEdit from '../screens/CarEdit';
import CarDetail from '../screens/CarDetail';
export default function MainContainer() {
  const [cars, setCars] = useState([]);
  const [categories, setCategories] = useState([]);
  const [parts, setParts] = useState([]);
  const history = useHistory();

  return (
    <div>
      <h1>Main Container</h1>
    </div>
  )
}

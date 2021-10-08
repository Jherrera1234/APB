import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { getAllCars, getOneCar, postCar, deleteCar, putCar } from '../../services/cars';
import Cars from '../../screens/Cars/Cars';
import Car from '../../screens/Car/Car';
// import CarCreate from '../../screens/CarCreate';
import CarEdit from '../../screens/CarEdit/CarEdit';
import Category from '../../screens/Category/Category';

// import CarDetail from '../../screens/CarDetail';
export default function MainContainer() {
  const [cars, setCars] = useState([]);
  const [car, setCar] = useState([]);
  const [categories, setCategories] = useState([]);
  const [parts, setParts] = useState([]);
  const history = useHistory();


  useEffect(() => {
    const fetchCars = async () => {
      const carList = await getAllCars();
      setCars(carList);
    };
    fetchCars();
  }, []);




  const handleCarUpdate = async (id, carData) => {
    const updatedCar = await putCar(id, carData);
    setCars((prevState) =>
      prevState.map((car) => {
        return car.id === Number(id) ? updatedCar : car;
      })
    );
    history.push('/');
  };

  return (
    <Switch>
      <Route path='/cars/:car_id/categories/:category_id'>
        <Category />
      </Route>
      <Route path='/cars/:id/edit'>
        <CarEdit cars={cars} handleCarUpdate={handleCarUpdate} />
      </Route>
      <Route path='/cars/:id'>
        <Car />
      </Route>
      <Route path='/'>
        <Cars cars={cars} />
      </Route>
    </Switch>
  )
}

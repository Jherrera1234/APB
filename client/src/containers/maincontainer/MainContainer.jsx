import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { getAllCars, getOneCar, postCar, deleteCar, putCar } from '../../services/cars';
import { getAllParts, putPart } from '../../services/parts';
import Cars from '../../screens/Cars/Cars';
import Car from '../../screens/Car/Car';
// import CarCreate from '../../screens/CarCreate';
import CarEdit from '../../screens/CarEdit/CarEdit';
import Category from '../../screens/Category/Category';
import PartEdit from '../../screens/PartEdit/PartEdit';
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

  useEffect(() => {
    const fetchParts = async () => {
      const partList = await getAllParts();
      setParts(partList);
    };
    fetchParts();
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

  const handlePartUpdate = async (id, partData) => {
    const updatedPart = await putPart(id, partData);
    setParts((prevState) =>
      prevState.map((part) => {
        return part.id === Number(id) ? updatedPart : part;
      })
    );
    history.push('/');
  };

  return (
    <Switch>
      <Route path='/parts/:id/edit'>
        <PartEdit parts={parts} handlePartUpdate={handlePartUpdate} />
      </Route>
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

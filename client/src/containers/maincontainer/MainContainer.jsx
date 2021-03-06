import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { getAllCars, postCar, deleteCar, putCar, getUserCars } from '../../services/cars';
import { getAllParts, putPart, postPart, deletePart } from '../../services/parts';
import Cars from '../../screens/Cars/Cars';
import Car from '../../screens/Car/Car';
import CarEdit from '../../screens/CarEdit/CarEdit';
import Category from '../../screens/Category/Category';
import PartEdit from '../../screens/PartEdit/PartEdit';
import CarCreate from '../../screens/CarCreate/CarCreate';
import PartCreate from '../../screens/PartCreate/PartCreate';
// import CarDetail from '../../screens/CarDetail';
export default function MainContainer() {
  const [cars, setCars] = useState([]);
  const [car, setCar] = useState([]);
  const [categories, setCategories] = useState([]);
  const [parts, setParts] = useState([]);
  const history = useHistory();



  // useEffect(() => {
  //   const fetchCars = async (props.userData_id) => {
  //     const carList = await getUserCars(id);
  //     setCars(carList);
  //   };
  //   fetchCars();
  // }, []);

  const handleFetchCars = async (id) => {
    const carList = await getUserCars(id);
    setCars(carList);
  }


  useEffect(() => {
    const fetchParts = async () => {
      const partList = await getAllParts();
      setParts(partList);
    };
    fetchParts();
  }, []);

  const handlePartDelete = async (id) => {
    await deletePart(id);
    setParts((prevState) => prevState.filter((partItem) => partItem.id !== id));
    history.push('/');
  };

  const handleCarDelete = async (id) => {
    await deleteCar(id);
    setCars((prevState) => prevState.filter((carItem) => carItem.id !== id));
    history.push('/');
  };

  const handleCarUpdate = async (id, carData) => {
    const updatedCar = await putCar(id, carData);
    setCars((prevState) =>
      prevState.map((car) => {
        return car.id === Number(id) ? updatedCar : car;
      })
    );
    history.push('/');
  };

  const handleCarCreate = async (carData) => {
    const newCar = await postCar(carData);
    setCars((prevState) => [...prevState, newCar]);
    history.push('/');
  };

  const handlePartCreate = async (car_id, id, partData) => {
    const newPart = await postPart(car_id, id, partData);
    setParts((prevState) => [...prevState, newPart]);
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
  //cars={cars}
  return (
    <Switch>
      <Route path='/parts/cars/:car_id/categories/:category_id'>
        <PartCreate handlePartCreate={handlePartCreate} />
      </Route>
      <Route path='/cars/new'>
        <CarCreate handleCarCreate={handleCarCreate} />
      </Route>
      <Route path='/parts/:id/edit'>
        <PartEdit parts={parts} handlePartUpdate={handlePartUpdate} />
      </Route>
      <Route path='/cars/:car_id/categories/:category_id'>
        <Category handlePartDelete={handlePartDelete} />
      </Route>
      <Route path='/cars/:id/edit'>
        <CarEdit cars={cars} handleCarUpdate={handleCarUpdate} />
      </Route>
      <Route path='/cars/:id'>
        <Car />
      </Route>
      <Route path='/users/:user_id/cars'>

        <Cars handleCarDelete={handleCarDelete} handleFetchCars={handleFetchCars} />
      </Route>
    </Switch>
  )
}

import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { getAllCars, getOneCar, postCar, deleteCar, putCar } from '../../services/cars';
import Cars from '../../screens/Cars/Cars';
// import CarCreate from '../../screens/CarCreate';
import CarEdit from '../../screens/CarEdit/CarEdit';
// import CarDetail from '../../screens/CarDetail';
export default function MainContainer() {
  const [cars, setCars] = useState([]);
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
    history.push('/cars');
  };

  return (
    <div>
      <Route path='/cars/:id/edit'>
        <CarEdit cars={cars} handleCarUpdate={handleCarUpdate} />
      </Route>
      <Route path='/cars'>
        <Cars cars={cars} />
      </Route>
    </div>
  )
}

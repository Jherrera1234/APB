import { Link } from 'react-router-dom';

export default function Cars(props) {
  return (
    <div>
      <h3>Cars</h3>
      {props.cars.map((car) => (
        <div key={car.id}>
          <Link to={`/cars/${car.id}`}>
            <p>{car.make}</p>
            <p>{car.model}</p>
            <img src={car.img_url} />
          </Link>
          <Link to={`/cars/${car.id}/edit`}>
            <button>Edit</button>
          </Link>
          {/* <button onClick={() => props.handleCarDelete(car.id)}>
            Delete
          </button> */}
        </div>
      ))}
      <Link to='/cars/new'>
        <button>create</button>
      </Link>
    </div>
  );
}
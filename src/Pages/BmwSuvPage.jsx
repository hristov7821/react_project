import React from 'react';
import bmwsuv1 from '/src/assets/bmwx7.jpg';
import bmwsuv2 from '/src/assets/bmwx5.jpg';
import bmwsuv3 from '/src/assets/bmwx6.jpg';

const cars = [
  {
    id: 1,
    name: 'BMW X5',
    image: bmwsuv2, 
    description: 'BMW X5 е просторен SUV с 3.0-литров дизелов двигател и интелигентно задвижване.',
    specs: {
      engine: '3.0L Diesel',
      horsepower: '286 к.с.',
      topSpeed: '240 км/ч',
      price: '€75,000',
      fuel:'5,1 - 5,6l/100 km',
      acceleration:'0-100 km/h за 6,1s',
    },
  },
  {
    id: 2,
    name: 'BMW X6',
    image: bmwsuv3, 
    description: 'BMW X6 е спортен SUV с агресивен дизайн и 3.0-литров бензинов двигател.',
    specs: {
      engine: '3.0L Petrol',
      horsepower: '340 к.с.',
      topSpeed: '250 км/ч',
      price: '€90,000',
      fuel:'12,7 - 12.9l/100 km',
      acceleration:'0-100 km/h за 3,9s',
    },
  },
  {
    id: 3,
    name: 'BMW X7',
    image: bmwsuv1, 
    description: 'BMW X7 е луксозен и просторен SUV с 4.4-литров V8 двигател.',
    specs: {
      engine: '4.4L V8',
      horsepower: '523 к.с.',
      topSpeed: '250 км/ч',
      price: '€120,000',
      fuel:'12,2 - 13.3l/100 km',
      acceleration:'0-100 km/h за 4,7s',
    },
  },
];

const BmwSuvPage = () => {
  return (
    <div className="subpage3">
      <h1>BMW SUV Коли</h1>
      <div className="cards-container">
        {cars.map((car) => (
          <div key={car.id} className="car-card">
            <img src={car.image} alt={car.name} className="car-image" />
            <h3>{car.name}</h3>
            <p>{car.description}</p>
            <ul>
              <li><strong>Двигател:</strong> {car.specs.engine}</li>
              <li><strong>Разход на гориво:</strong> {car.specs.fuel}</li>
              <li><strong>Мощност:</strong> {car.specs.horsepower}</li>
              <li><strong>Максимална скорост:</strong> {car.specs.topSpeed}</li>
              <li><strong>Цена:</strong> {car.specs.price}</li>
              <li><strong>Ускорение:</strong> {car.specs.acceleration}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BmwSuvPage;

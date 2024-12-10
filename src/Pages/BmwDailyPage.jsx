import React from 'react';
import bmwdaily1 from '/src/assets/bmw3s.jpg';
import bmwdaily2 from '/src/assets/bmw5s.jpg';
import bmwdaily3 from '/src/assets/bmwx1.jpg';

const cars = [
  {
    id: 1,
    name: 'BMW 3 Series',
    image: bmwdaily1, 
    description: 'BMW 3 Series е перфектен седан за ежедневна употреба с 2.0-литров дизелов двигател.',
    specs: {
      engine: '2.0L Diesel',
      horsepower: '190 к.с.',
      topSpeed: '230 км/ч',
      price: '€45,000',
      fuel: '4.8l/100 km',
      acceleration: '0-100 km/h за 7.1s',
    },
  },
  {
    id: 2,
    name: 'BMW 5 Series',
    image: bmwdaily2, 
    description: 'BMW 5 Series е просторен и комфортен седан за бизнес и удоволствие.',
    specs: {
      engine: '2.0L Diesel',
      horsepower: '220 к.с.',
      topSpeed: '250 км/ч',
      price: '€65,000',
      fuel: '5.2l/100 km',
      acceleration: '0-100 km/h за 6.8s',
    },
  },
  {
    id: 3,
    name: 'BMW X1',
    image: bmwdaily3, 
    description: 'BMW X1 е компактен SUV, перфектен за града и ежедневна употреба.',
    specs: {
      engine: '1.5L Petrol',
      horsepower: '150 к.с.',
      topSpeed: '210 км/ч',
      price: '€38,000',
      fuel: '6.4l/100 km',
      acceleration: '0-100 km/h за 9.6s',
    },
  },
];

const BmwDailyPage = () => {
  return (
    <div className="subpage3">
      <h1>BMW Ежедневни Коли</h1>
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

export default BmwDailyPage;

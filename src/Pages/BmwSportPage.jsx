import React from 'react';
import bmwsport1 from '/src/assets/bmwm3.jpg';
import bmwsport2 from '/src/assets/bmwm4.jpg';
import bmwsport3 from '/src/assets/bmwm8.jpg';

const cars = [
  {
    id: 1,
    name: 'BMW M3',
    image: bmwsport1, 
    description: 'BMW M3 е мощен спортен седан с 3.0-литров битурбо двигател и изключителна динамика.',
    specs: {
      engine: '3.0L Biturbo',
      horsepower: '510 к.с.',
      topSpeed: '290 км/ч',
      price: '€85,000',
      fuel: '10.1l/100 km',
      acceleration: '0-100 km/h за 3.9s',
    },
  },
  {
    id: 2,
    name: 'BMW M4',
    image: bmwsport2, 
    description: 'BMW M4 е купе с агресивен дизайн и невероятна производителност.',
    specs: {
      engine: '3.0L Biturbo',
      horsepower: '510 к.с.',
      topSpeed: '280 км/ч',
      price: '€88,000',
      fuel: '10.2l/100 km',
      acceleration: '0-100 km/h за 3.8s',
    },
  },
  {
    id: 3,
    name: 'BMW M8 GRAN COUPE',
    image: bmwsport3, 
    description: 'BMW M8 е купе с агресивен дизайн и спортна динамика.',
    specs: {
      engine: '4.4L V8',
      horsepower: '625 к.с.',
      topSpeed: '250 км/ч',
      price: '€260,000',
      fuel: '11.6l/100 km',
      acceleration: '0-100 km/h за 3.2s',
    },
  },
];

const BmwSportPage = () => {
  return (
    <div className="subpage3">
      <h1>BMW Спортни Коли</h1>
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

export default BmwSportPage;

import React from 'react';
import audiDaily1 from '/src/assets/audi_a4.jpg';
import audiDaily2 from '/src/assets/audi_a6.jpg';
import audiDaily3 from '/src/assets/audi_q3.jpg';

const cars = [
  {
    id: 1,
    name: 'Audi A4',
    image: audiDaily1,
    description: 'Audi A4 е стилен седан с икономичен двигател и комфорт.',
    specs: {
      engine: '2.0L Diesel',
      horsepower: '190 к.с.',
      topSpeed: '240 км/ч',
      price: '€40,000',
      fuel: '4.9l/100 km',
      acceleration: '0-100 km/h за 7.2s',
    },
  },
  {
    id: 2,
    name: 'Audi A6',
    image: audiDaily2,
    description: 'Audi A6 предлага просторен интериор и луксозно изживяване.',
    specs: {
      engine: '3.0L TDI',
      horsepower: '286 к.с.',
      topSpeed: '250 км/ч',
      price: '€60,000',
      fuel: '5.5l/100 km',
      acceleration: '0-100 km/h за 5.5s',
    },
  },
  {
    id: 3,
    name: 'Audi Q3',
    image: audiDaily3,
    description: 'Audi Q3 е компактен SUV, подходящ за ежедневието.',
    specs: {
      engine: '1.5L TFSI',
      horsepower: '150 к.с.',
      topSpeed: '210 км/ч',
      price: '€35,000',
      fuel: '6.2l/100 km',
      acceleration: '0-100 km/h за 9.3s',
    },
  },
];

const AudiDailyPage = () => {
  return (
    <div className="subpage2">
      <h1>Audi Ежедневни Коли</h1>
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

export default AudiDailyPage;

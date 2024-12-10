import React from 'react';
import audiSuv1 from '/src/assets/audi_q5.jpg';
import audiSuv2 from '/src/assets/audi_q7.jpg';
import audiSuv3 from '/src/assets/audi_q8.jpg';

const cars = [
  {
    id: 1,
    name: 'Audi Q5',
    image: audiSuv1,
    description: 'Audi Q5 е компактен луксозен SUV с quattro задвижване.',
    specs: {
      engine: '2.0L Diesel',
      horsepower: '204 к.с.',
      topSpeed: '222 км/ч',
      price: '€50,000',
      fuel: '4.8l/100 km',
      acceleration: '0-100 km/h за 7.6s',
    },
  },
  {
    id: 2,
    name: 'Audi Q7',
    image: audiSuv2,
    description: 'Audi Q7 предлага просторен интериор и мощен двигател.',
    specs: {
      engine: '3.0L V6',
      horsepower: '286 к.с.',
      topSpeed: '245 км/ч',
      price: '€75,000',
      fuel: '6.9l/100 km',
      acceleration: '0-100 km/h за 6.1s',
    },
  },
  {
    id: 3,
    name: 'Audi Q8',
    image: audiSuv3,
    description: 'Audi Q8 е флагманът на Audi SUV с модерен дизайн.',
    specs: {
      engine: '4.0L V8',
      horsepower: '600 к.с.',
      topSpeed: '250 км/ч',
      price: '€100,000',
      fuel: '10.7l/100 km',
      acceleration: '0-100 km/h за 4.1s',
    },
  },
];

const AudiSuvPage = () => {
  return (
    <div className="subpage2">
      <h1>Audi SUV Коли</h1>
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

export default AudiSuvPage;

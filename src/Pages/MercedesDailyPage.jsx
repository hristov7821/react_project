import React from 'react';
import mercedesDaily1 from '/src/assets/mercedes_e.jpg';
import mercedesDaily2 from '/src/assets/mercedes_c.jpg';
import mercedesDaily3 from '/src/assets/mercedes_a.jpg';

const cars = [
  {
    id: 1,
    name: 'Mercedes E-Class',
    image: mercedesDaily1,
    description: 'Mercedes E-Class предлага елегантност и комфорт за ежедневието.',
    specs: {
      engine: '2.0L Diesel',
      horsepower: '194 к.с.',
      topSpeed: '240 км/ч',
      price: '€65,000',
      fuel: '4.8l/100 km',
      acceleration: '0-100 km/h за 7.5s',
    },
  },
  {
    id: 2,
    name: 'Mercedes C-Class',
    image: mercedesDaily2,
    description: 'Mercedes C-Class е перфектен избор за стилна ежедневна употреба.',
    specs: {
      engine: '2.0L Petrol',
      horsepower: '258 к.с.',
      topSpeed: '250 км/ч',
      price: '€55,000',
      fuel: '6.5l/100 km',
      acceleration: '0-100 km/h за 6.0s',
    },
  },
  {
    id: 3,
    name: 'Mercedes A-Class',
    image: mercedesDaily3,
    description: 'Mercedes A-Class е компактен и модерен автомобил за града.',
    specs: {
      engine: '1.3L Petrol',
      horsepower: '163 к.с.',
      topSpeed: '225 км/ч',
      price: '€35,000',
      fuel: '5.2l/100 km',
      acceleration: '0-100 km/h за 8.3s',
    },
  },
];

const MercedesDailyPage = () => {
  return (
    <div className="subpage1">
      <h1>Mercedes Ежедневни Коли</h1>
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

export default MercedesDailyPage;

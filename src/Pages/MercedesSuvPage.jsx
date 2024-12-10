import React from 'react';
import mercedesSuv1 from '/src/assets/gle.jpg';
import mercedesSuv2 from '/src/assets/gls.jpg';
import mercedesSuv3 from '/src/assets/glc.jpg';

const cars = [
  {
    id: 1,
    name: 'Mercedes GLE',
    image: mercedesSuv1,
    description: 'Mercedes GLE е среден клас SUV, предлагащ комфорт и мощност.',
    specs: {
      engine: '3.0L Diesel',
      horsepower: '272 к.с.',
      topSpeed: '240 км/ч',
      price: '€70,000',
      fuel: '7.1l/100 km',
      acceleration: '0-100 km/h за 6.5s',
    },
  },
  {
    id: 2,
    name: 'Mercedes GLS',
    image: mercedesSuv2,
    description: 'Mercedes GLS е най-големият SUV в гамата, предлагащ лукс и простор.',
    specs: {
      engine: '4.0L V8',
      horsepower: '489 к.с.',
      topSpeed: '250 км/ч',
      price: '€110,000',
      fuel: '10.3l/100 km',
      acceleration: '0-100 km/h за 5.2s',
    },
  },
  {
    id: 3,
    name: 'Mercedes GLC',
    image: mercedesSuv3,
    description: 'Mercedes GLC е компактен SUV, който комбинира стил и ефективност.',
    specs: {
      engine: '2.0L Petrol',
      horsepower: '197 к.с.',
      topSpeed: '230 км/ч',
      price: '€50,000',
      fuel: '6.9l/100 km',
      acceleration: '0-100 km/h за 7.8s',
    },
  },
];

const MercedesSuvPage = () => {
  return (
    <div className="subpage1">
      <h1>Mercedes SUV Коли</h1>
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

export default MercedesSuvPage;

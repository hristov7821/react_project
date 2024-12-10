import React from 'react';
import mercedesSport1 from '/src/assets/amggt.jpg';
import mercedesSport2 from '/src/assets/slsamg.jpg';
import mercedesSport3 from '/src/assets/amgone.jpg';

const cars = [
  {
    id: 1,
    name: '63 S E PERFORMANCE V8',
    image: mercedesSport1,
    description: '63 S E PERFORMANCE V8 е луксозен спортен автомобил с 4.0-литров V8 двигател.',
    specs: {
      engine: '4.0L V8 Biturbo',
      horsepower: '843 к.с.',
      topSpeed: '312 км/ч',
      price: '€320,000',
      fuel: '8.6l/100 km',
      acceleration: '0-100 km/h за 2.9s',
    },
  },
  {
    id: 2,
    name: 'Mercedes SLS AMG',
    image: mercedesSport2,
    description: 'Mercedes SLS AMG е спортна икона с легендарни врати тип "криле на чайка".',
    specs: {
      engine: '6.2L V8',
      horsepower: '571 к.с.',
      topSpeed: '317 км/ч',
      price: '€180,000',
      fuel: '13.2l/100 km',
      acceleration: '0-100 km/h за 3.8s',
    },
  },
  {
    id: 3,
    name: 'Mercedes-Benz AMG ONE',
    image: mercedesSport3,
    description: 'Mercedes-Benz AMG ONE комбинира производителност с бързина.',
    specs: {
      engine: '1.6L V6',
      horsepower: '1063 к.с.',
      topSpeed: '290 км/ч',
      price: '€1,000,000',
      fuel: '8.7l/100 km',
      acceleration: '0-100 km/h за 2.9s',
    },
  },
];

const MercedesSportPage = () => {
  return (
    <div className="subpage1">
      <h1>Mercedes Спортни Коли</h1>
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

export default MercedesSportPage;

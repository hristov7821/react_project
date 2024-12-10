import React from 'react';
import audiSport1 from '/src/assets/mtm.jpg';
import audiSport2 from '/src/assets/r8.jpg';
import audiSport3 from '/src/assets/s8.jpg';

const cars = [
  {
    id: 1,
    name: 'Audi RS7 MTM',
    image: audiSport1,
    description: 'Audi RS7 е луксозен спортен автомобил с 5.2-литров V10 двигател.',
    specs: {
      engine: '5.2L V10',
      horsepower: '1001 к.с.',
      topSpeed: '370 км/ч',
      price: '€170,000',
      fuel: '16.0l/100 km',
      acceleration: '0-100 km/h за 3.0s',
    },
  },
  {
    id: 2,
    name: 'Audi R8 II Spyder',
    image: audiSport2,
    description: 'Audi R8 II Spyder е мощен купе модел с quattro задвижване.',
    specs: {
      engine: '5.2L V10 FSI',
      horsepower: '620 к.с.',
      topSpeed: '329 км/ч',
      price: '€120,000',
      fuel: '24.5l/100 km',
      acceleration: '0-100 km/h за 3.2s',
    },
  },
  {
    id: 3,
    name: 'Audi S8',
    image: audiSport3,
    description: 'Audi S8 е широк спортен автомобил с елегантен дизайн.',
    specs: {
      engine: '4.0L V8 TFSI',
      horsepower: '571 к.с.',
      topSpeed: '250 км/ч',
      price: '€90,000',
      fuel: '11.5l/100 km',
      acceleration: '0-100 km/h за 3.8s',
    },
  },
];

const AudiSportPage = () => {
  return (
    <div className="subpage2">
      <h1>Audi Спортни Коли</h1>
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

export default AudiSportPage;

import React from 'react';

const CarCard = ({ car, onClick }) => {
  return (
    <div className="car-card" onClick={() => onClick(car)}>
      <img src={car.image} alt={car.name} className="car-image" />
      <h3>{car.name}</h3>
    </div>
  );
};

export default CarCard;

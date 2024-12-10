import React from 'react';
import { Link } from 'react-router-dom';
import mercedesLogo from './assets/benzsport.jpg';
import mercedesLogo2 from './assets/benzdaily.jpg';
import mercedesLogo3 from './assets/benzsuv.jpg';

const MercedesPage = () => {
  return (
    <div className="mercedespage">
      <div>
        <h1>Добре дошли в Mercedes</h1>
        <div className="cards-container">
          <Link to="/mercedes/sport">
            <div className="card">
              <img src={mercedesLogo} alt="Mercedes Sport" className="card-image" />
              <h3>Спортна кола</h3>
            </div>
          </Link>
          <Link to="/mercedes/daily">
            <div className="card">
              <img src={mercedesLogo2} alt="Mercedes Daily" className="card-image" />
              <h3>Ежедневна кола</h3>
            </div>
          </Link>
          <Link to="/mercedes/suv">
            <div className="card">
              <img src={mercedesLogo3} alt="Mercedes SUV" className="card-image" />
              <h3>Джип</h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MercedesPage;

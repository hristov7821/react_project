import React from 'react';
import { Link } from 'react-router-dom';
import bmwLogo from './assets/bmwsport.jpg';
import bmwLogo2 from './assets/bmwdaily.jpg';
import bmwLogo3 from './assets/bmwsuv.jpg';

const BmwPage = () => {
  return (
    <div className="bmwpage">
      <div>
        <h1>Добре дошли в BMW</h1>
        <div className="cards-container">
          <Link to="/bmw/sport">
            <div className="card">
              <img src={bmwLogo} alt="BMW Sport" className="card-image" />
              <h3>Спортна кола</h3>
            </div>
          </Link>
          <Link to="/bmw/daily">
            <div className="card">
              <img src={bmwLogo2} alt="BMW Daily" className="card-image" />
              <h3>Ежедневна кола</h3>
            </div>
          </Link>
          <Link to="/bmw/suv">
            <div className="card">
              <img src={bmwLogo3} alt="BMW SUV" className="card-image" />
              <h3>Джип</h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BmwPage;

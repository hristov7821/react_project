import React from 'react';
import { Link } from 'react-router-dom';
import audiLogo from './assets/audisport.jpg';
import audiLogo2 from './assets/Audidaily.jpg';
import audiLogo3 from './assets/audisuv.jpg';

const AudiPage = () => {
  return (
    <div className="audipage">
      <div>
        <h1>Добре дошли в Audi</h1>
        <div className="cards-container">
          <Link to="/audi/sport">
            <div className="card">
              <img src={audiLogo} alt="Audi Sport" className="card-image" />
              <h3>Спортна кола</h3>
            </div>
          </Link>
          <Link to="/audi/daily">
            <div className="card">
              <img src={audiLogo2} alt="Audi Daily" className="card-image" />
              <h3>Ежедневна кола</h3>
            </div>
          </Link>
          <Link to="/audi/suv">
            <div className="card">
              <img src={audiLogo3} alt="Audi SUV" className="card-image" />
              <h3>Джип</h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AudiPage;

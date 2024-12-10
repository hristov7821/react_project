import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AudiCard from './AudiCardMain';
import BmwCard from './BmwCardMain';
import MercedesCard from './MercedesCardMain';
import AudiPage from './AudiPage';
import BmwPage from './BmwPage';
import MercedesPage from './MercedesPage';

import AudiSportPage from './Pages/AudiSportPage';
import AudiDailyPage from './Pages/AudiDailyPage';

import AudiSuvPage from './Pages/AudiSuvPage';

import BmwSportPage from './Pages/BmwSportPage';
import BmwDailyPage from './Pages/BmwDailyPage';
import BmwSuvPage from './Pages/BmwSuvPage';
import MercedesSportPage from './Pages/MercedesSportPage';
import MercedesDailyPage from './Pages/MercedesDailyPage';
import MercedesSuvPage from './Pages/MercedesSuvPage';

function App() {
  return (
    <Router>
      <Routes>
        
        <Route
          path="/"
          element={
            <div className="homepage">
              <h1>Добре дошли в Car Selector</h1>
              <div className="cards-container">
                <Link to="/audi"><AudiCard /></Link>
                <Link to="/bmw"><BmwCard /></Link>
                <Link to="/mercedes"><MercedesCard /></Link>
              </div>
            </div>
          }
        />
       
        <Route path="/audi" element={<AudiPage />} />
        <Route path="/bmw" element={<BmwPage />} />
        <Route path="/mercedes" element={<MercedesPage />} />

       
        <Route path="/audi/sport" element={<AudiSportPage />} />
        <Route path="/audi/daily" element={<AudiDailyPage />} />
        <Route path="/audi/suv" element={<AudiSuvPage />} />

        
        <Route path="/bmw/sport" element={<BmwSportPage />} />
        <Route path="/bmw/daily" element={<BmwDailyPage />} />
        <Route path="/bmw/suv" element={<BmwSuvPage />} />

        
        <Route path="/mercedes/sport" element={<MercedesSportPage />} />
        <Route path="/mercedes/daily" element={<MercedesDailyPage />} />
        <Route path="/mercedes/suv" element={<MercedesSuvPage />} />
      </Routes>
    </Router>
  );
}

export default App;


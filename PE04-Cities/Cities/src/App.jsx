import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import CitiesList from './components/CitiesList';
import CityDetails from './components/CityDetails';
import AddCity from './components/AddCity';

function App() {
  const [cities, setCities] = useState([
    { id: 1, name: "New York", country: "USA", population: "8.4M" },
    { id: 2, name: "Tokyo", country: "Japan", population: "14M" }
  ]);

  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/cities">Cities List</Link></li>
          <li><Link to="/add-city">Add City</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/cities" element={<CitiesList cities={cities} />} />
        <Route path="/cities/:id" element={<CityDetails cities={cities} />} />
        <Route path="/add-city" element={<AddCity setCities={setCities} />} />
      </Routes>
    </Router>
  );
}

export default App;

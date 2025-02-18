import React from 'react';
import { Link } from 'react-router-dom';

function CitiesList({ cities }) {
  return (
    <div>
      <h2>City List</h2>
      <ul>
        {cities.map(city => (
          <li key={city.id}>
            <Link to={`/cities/${city.id}`}>{city.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CitiesList;

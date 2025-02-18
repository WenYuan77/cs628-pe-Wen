import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddCity({ setCities }) {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [population, setPopulation] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setCities(prevCities => [...prevCities, { id: prevCities.length + 1, name, country, population }]);
    
    // 重定向回城市列表
    navigate("/cities");
  };

  return (
    <div>
      <h2>Add City</h2>
      <form onSubmit={handleSubmit}>
        <label>City Name:</label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} required />

        <label>Country:</label>
        <input type="text" value={country} onChange={e => setCountry(e.target.value)} required />

        <label>Population:</label>
        <input type="text" value={population} onChange={e => setPopulation(e.target.value)} required />

        <button type="submit">Add City</button>
      </form>
    </div>
  );
}

export default AddCity;

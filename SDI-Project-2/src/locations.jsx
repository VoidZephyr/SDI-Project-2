// src/features/Locations/location.jsx
import React, { useEffect, useState } from 'react';

function LocationList() {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getLocations = async () => {
      const response = await fetch('https://rickandmortyapi.com/api/location');
      const data = await response.json();
      setLocations(data.results);
      setLoading(false);
    };
    
    getLocations();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Locations</h1>
      <div>
        {locations.map((location) => (
          <div key={location.id}>
            <h2>{location.name}</h2>
            <p>Type: {location.type}</p>
            <p>Dimension: {location.dimension}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LocationList;

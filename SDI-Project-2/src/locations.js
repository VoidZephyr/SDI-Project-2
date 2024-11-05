import React, { useEffect, useState } from 'react';
import { fetchLocations } from '../../api.js';


function locationList() {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        const getLocations = async () => {
            const data = await fetchLocations();
            setLocations(data);
        };
        getLocations();
    }, []);

    return (
        <div>
        <h1>Locations</h1>
        <div>
            {locations.map((location) => (
            <div key={location.id}>
                <img src={location.image} alt={location.name} />
                <h2>{location.name}</h2>
                <p>{location.species}</p>
            </div>
            ))}
        </div>
        </div>
    );
    }
    
export default locationList;
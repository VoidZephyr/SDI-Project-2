import React, { useEffect, useState } from 'react';
import { fetchEpisodes} from '../../api.js';


function episodeList() {
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        const getEpisodes = async () => {
            const data = await fetchEpisodes();
            setEpisodes(data);
        };
        getEpisodes();
    }, []);

    return (
        <div>
        <h1>Episodes</h1>
        <div>
            {episodes.map((episode) => (
            <div key={episode.id}>
                <img src={episode.image} alt={episode.name} />
                <h2>{episode.name}</h2>
                <p>{episode.species}</p>
            </div>
            ))}
        </div>
        </div>
    );
    }
    
export default episodeList; 
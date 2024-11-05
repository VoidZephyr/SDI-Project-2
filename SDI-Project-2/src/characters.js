import React, { useEffect, useState } from 'react';
import { fetchCharacters } from '../../api.js';


function CharacterList() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const getCharacters = async () => {
            const data = await fetchCharacters();
            setCharacters(data);
        };
        getCharacters();
    }, []);

    return (
        <div>
        <h1>Characters</h1>
        <div>
            {characters.map((character) => (
            <div key={character.id}>
                <img src={character.image} alt={character.name} />
                <h2>{character.name}</h2>
                <p>{character.species}</p>
            </div>
            ))}
        </div>
        </div>
    );
    }
    
export default CharacterList; 
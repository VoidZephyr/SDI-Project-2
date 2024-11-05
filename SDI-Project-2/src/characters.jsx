// src/features/Characters/character.jsx
import React, { useEffect, useState } from 'react';

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCharacters = async () => {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      setCharacters(data.results);
      setLoading(false);
    };
    
    getCharacters();
  }, []);

  if (loading) return <p>Loading...</p>;

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

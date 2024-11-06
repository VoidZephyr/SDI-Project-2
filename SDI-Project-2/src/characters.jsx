import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './characters.css';

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        console.error('Error fetching characters:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="character-list">
      {characters.map((character) => (
        <div key={character.id} className="character-card">
          <Link to={`/characters/${character.id}`}>
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
            <p>{character.species}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CharacterList;

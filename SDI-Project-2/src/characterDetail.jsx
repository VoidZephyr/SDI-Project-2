import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function CharacterDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const data = await response.json();
        setCharacter(data);
      } catch (error) {
        console.error('Error fetching character details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!character) return <p>Character not found.</p>;

  return (
    <div className="character-detail">
      <button onClick={() => navigate(-1)} className="back-button">
        Back
      </button>
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <p>Species: {character.species}</p>
      <p>Status: {character.status}</p>
      <p>Gender: {character.gender}</p>
      <p>Location: {character.location.name}</p>
    </div>
  );
}

export default CharacterDetail;

import React, { useEffect, useState } from 'react';

function EpisodeList() {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getEpisodes = async () => {
      const response = await fetch('https://rickandmortyapi.com/api/episode');
      const data = await response.json();
      setEpisodes(data.results);
      setLoading(false);
    };
    
    getEpisodes();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Episodes</h1>
      <div>
        {episodes.map((episode) => (
          <div key={episode.id}>
            <h2>{episode.name}</h2>
            <p>Air Date: {episode.air_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EpisodeList;

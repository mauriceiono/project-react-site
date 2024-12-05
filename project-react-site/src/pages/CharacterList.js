import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/characters.css';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://project-react-site-server.onrender.com/api/CharacterList');
        if (!response.ok) {
          throw new Error('Failed to fetch characters.');
        }
        const data = await response.json();
        setCharacters(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchCharacters();
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (characters.length === 0) {
    return <p>Loading characters...</p>;
  }

  return (
    <div className="character-grid">
      {characters.map((character) => (
        <div key={character.id} className="character-card">
          <img src={character.image} alt={character.name} />
          <h3>{character.name}</h3>
          <p>{character.description}</p>
          <Link to={`/characters/${character.id}`} className="view-details-link">View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default CharacterList;
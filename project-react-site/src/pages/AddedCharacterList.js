import React, { useEffect, useState } from 'react';
//import './css/AddCharactersList.css';

const AddedCharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);

  // Fetch characters from the server
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://project-react-site-server.onrender.com/api/addedcharacters');
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
    <div>
      <h1>Added Characters</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.id} style={{ margin: '20px 0' }}>
            <h2>{character.name}</h2>
            <p>{character.description}</p>
            <img
              src={character.image}
              alt={character.name}
              style={{ width: '200px', borderRadius: '10px' }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddedCharacterList;

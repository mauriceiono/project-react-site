import React, { useState, useEffect } from 'react';

const DeleteCharacterPage = () => {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        // Fetch characters from both endpoints
        const addedCharactersResponse = await fetch('https://project-react-site-server.onrender.com/api/addedcharacters');
        const characterListResponse = await fetch('https://project-react-site-server.onrender.com/api/CharacterList');

        if (!addedCharactersResponse.ok || !characterListResponse.ok) {
          throw new Error('Failed to fetch characters.');
        }

        const addedCharacters = await addedCharactersResponse.json();
        const characterList = await characterListResponse.json();

        // Combine both lists
        setCharacters([...addedCharacters, ...characterList]);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchCharacters();
  }, []);

  const handleDelete = async (id) => {
    try {
      // Try to delete from added characters first
      let response = await fetch(`https://project-react-site-server.onrender.com/api/addedcharacters/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        // If not found, delete from hardcoded characters (if applicable)
        response = await fetch(`https://project-react-site-server.onrender.com/api/CharacterList/${id}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          throw new Error('Failed to delete character.');
        }
      }

      // Remove the deleted character from the list in local state
      setCharacters((prevCharacters) => prevCharacters.filter((character) => character.id !== id));
    } catch (error) {
      setError(error.message);
    }
  };

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Delete Character</h1>

      {/* Character List with Delete Button */}
      <div>
        <h2>Select a Character to Delete</h2>
        <ul>
          {characters.map((character) => (
            <li key={character.id} style={{ margin: '20px 0' }}>
              <h3>{character.name}</h3>
              <p>{character.description}</p>
              <img
                src={character.image}
                alt={character.name}
                style={{ width: '200px', borderRadius: '10px' }}
              />
              <br />
              <button
                onClick={() => handleDelete(character.id)}
                style={{ backgroundColor: 'red', color: 'white', padding: '10px', borderRadius: '5px' }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DeleteCharacterPage;
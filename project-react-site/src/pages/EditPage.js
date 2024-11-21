import React, { useState, useEffect } from 'react';

const EditPage = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState(null);

  // Fetch characters from the same API used in AddedCharacterList.js
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

  const handleCharacterSelect = (character) => {
    setSelectedCharacter(character);
    setName(character.name);
    setDescription(character.description);
    setImage(character.image);
  };

  const handleSave = async () => {
    if (!selectedCharacter) return;

    // Assuming the server has an API to update characters
    const updatedCharacter = {
      id: selectedCharacter.id,
      name,
      description,
      image
    };

    try {
      const response = await fetch(`https://project-react-site-server.onrender.com/api/addedcharacters/${selectedCharacter.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedCharacter),
      });

      if (!response.ok) {
        throw new Error('Failed to update character.');
      }

      // Update the local state after successful save
      setCharacters((prevCharacters) =>
        prevCharacters.map((character) =>
          character.id === selectedCharacter.id ? updatedCharacter : character
        )
      );

      // Reset form
      setSelectedCharacter(null);
      setName('');
      setDescription('');
      setImage('');
    } catch (error) {
      setError(error.message);
    }
  };

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Edit Character</h1>

      {/* Character Selection */}
      <div>
        <h2>Select a Character to Edit</h2>
        <ul>
          {characters.map((character) => (
            <li key={character.id}>
              <button onClick={() => handleCharacterSelect(character)}>
                {character.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Edit Form */}
      {selectedCharacter && (
        <div>
          <h2>Editing: {selectedCharacter.name}</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label>Description:</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div>
              <label>Image URL:</label>
              <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            <button type="button" onClick={handleSave}>
              Save Changes
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default EditPage;

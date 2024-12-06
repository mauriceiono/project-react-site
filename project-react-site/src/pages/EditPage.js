import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EditPage = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
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

  const handleEditClick = (character) => {
    setSelectedCharacter(character);
    setName(character.name);
    setDescription(character.description);
    setImage(character.image);
  };

  const handleSave = async () => {
    if (!selectedCharacter) return;

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);

    if (image instanceof File) {
      formData.append('image', image);
    } else {
      formData.append('image', image);
    }

    await saveCharacter(formData);
  };

  const saveCharacter = async (formData) => {
    try {
      const response = await fetch(`https://project-react-site-server.onrender.com/api/CharacterList/${selectedCharacter.id}`, {
        method: 'PUT',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to update character.');
      }

      navigate('/characters-list');
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
      {selectedCharacter ? (
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
            <label>Image:</label>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <button type="button" onClick={handleSave}>
            Save Changes
          </button>
        </form>
      ) : (
        <div>
          <h2>Select a Character to Edit</h2>
          <ul>
            {characters.map((character) => (
              <li key={character.id} style={{ margin: '20px 0' }}>
                <h3>{character.name}</h3>
                <p>{character.description}</p>
                <img
                  src={`https://project-react-site-server.onrender.com/${character.image}`}
                  alt={character.name}
                  style={{ width: '200px', borderRadius: '10px' }}
                />
                <br />
                <button
                  onClick={() => handleEditClick(character)}
                  style={{ backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '5px' }}
                >
                  Edit
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default EditPage;
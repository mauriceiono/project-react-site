import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/AddCharacters.css';

const AddCharacter = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !description || !image) {
      alert("All fields are required!");
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('image', image);

    try {
      const response = await fetch('https://project-react-site-server.onrender.com/api/CharacterList', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Character added successfully!');
        navigate('/characters-list');
      } else {
        const result = await response.json();
        alert(result.message || 'Error: Could not add character.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form.');
    }
  };

  return (
    <div className="add-character-page">
      <h1>Add New Character</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </div>
        <button type="submit">Add Character</button>
      </form>
    </div>
  );
};

export default AddCharacter;
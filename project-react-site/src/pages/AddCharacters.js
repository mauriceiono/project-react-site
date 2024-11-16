import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For redirecting after form submission
import '../css/AddCharacters.css';

const AddCharacter = () => {
  // State to manage form input
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate that all fields are filled
    if (!name || !description || !image) {
      alert("All fields are required!");
      return;
    }

    // Generate an ID based on the name
    const id = name.toLowerCase().replace(/\s+/g, '-'); // Convert spaces to hyphens, lowercase

    // Create a new character object
    const newCharacter = {
      id,
      name,
      description,
      image
    };

    try {
      const response = await fetch('https://project-react-site-server.onrender.com/api/addedcharacters', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCharacter),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);  // Log the response from the server
        alert('Character added successfully!');
        navigate('/characters');  // Navigate to the characters page after success
      } else {
        alert('Error: Could not add character.');
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
          <label htmlFor="image">Image URL:</label>
          <input
            type="url"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>

        <button type="submit">Add Character</button>
      </form>
    </div>
  );
};

export default AddCharacter;

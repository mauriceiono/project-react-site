import React, { useState } from 'react';

const AddCharacterForm = ({ onCharacterListUpdate }) => {
    const [formData, setFormData] = useState({
        name: '',
        game: '',
        description: '',
        abilities: '',
        image: '',
    });

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        setSuccessMessage('');

        try {
            const response = await fetch('https://project-react-site-server.onrender.com/api/characters', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                setSuccessMessage('Character added successfully!');
                setFormData({ name: '', game: '', description: '', abilities: '', image: '' });
                onCharacterListUpdate(data.newCharacter); // Use newCharacter from server response
            } else {
                setErrorMessage(data.message || 'Failed to add character.');
            }
        } catch (error) {
            setErrorMessage('An error occurred. Please try again.');
        }
    };

    return (
        <div>
            <h2>Add a New Character</h2>
            {errorMessage && <p className="error">{errorMessage}</p>}
            {successMessage && <p className="success">{successMessage}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    name="name"
                    placeholder="Character Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    name="game"
                    placeholder="Game Title"
                    value={formData.game}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />
                <input
                    name="abilities"
                    placeholder="Abilities"
                    value={formData.abilities}
                    onChange={handleChange}
                    required
                />
                <input
                    name="image"
                    placeholder="Image URL"
                    value={formData.image}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Add Character</button>
            </form>
        </div>
    );
};

export default AddCharacterForm;

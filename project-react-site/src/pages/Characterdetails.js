import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../css/Characterdetails.css';

const CharacterDetails = () => {
    const { id } = useParams();  // Get the character id from the URL
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://project-react-site-server.onrender.com/api/characters')  // Fetch hardcoded characters from the API
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                // Find the character by matching the ID (as string, not integer)
                const characterData = data.find((character) => character.id === id);
                setCharacter(characterData);  // Set the character data in state
                setLoading(false);  // Stop loading
            })
            .catch((error) => {
                console.error('Error fetching character:', error);
                setLoading(false);  // Stop loading on error
            });
    }, [id]);  // This effect runs when the 'id' changes

    if (loading) {
        return <p>Loading...</p>;  // Display loading message while fetching
    }

    if (!character) {
        return <p>Character not found!</p>;  // Display if character doesn't exist
    }

    return (
        <div className="character-details">
            <img src={character.image} alt={character.name} />  {/* Display character image */}
            <h1>{character.name}</h1>
            <h2>Game: {character.game}</h2>
            <p><strong>Description:</strong> {character.description}</p>
            <p><strong>Abilities:</strong> {character.abilities}</p>
            <p><strong>Trivia:</strong> {character.trivia}</p>
        </div>
    );
};

export default CharacterDetails;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import '../css/Characterdetails.css'; 

const CharacterDetails = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        fetch(`https://project-react-site-server.onrender.com/api/characters/${id}`)
            .then((response) => response.json())
            .then((data) => setCharacter(data))
            .catch((error) => console.error('Error fetching character:', error));
    }, [id]);

    if (!character) {
        return <p>Character not found!</p>;
    }

    return (
        <div className="character-details">
            <img src={`https://project-react-site-server.onrender.com${character.image}`} alt={character.name} />
            <h1>{character.name}</h1>
            <h2>Game: {character.game}</h2>
            <p><strong>Description:</strong> {character.description}</p>
            <p><strong>Abilities:</strong> {character.abilities}</p>
            <p><strong>Trivia:</strong> {character.trivia}</p>
        </div>
    );
};

export default CharacterDetails;  

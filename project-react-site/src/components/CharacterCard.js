import React from 'react';

const CharacterCard = ({ character }) => {
    return (
        <div className="character-card">
            <h3>{character.name}</h3>
            <img src={character.image} alt={`${character.name}`} />
            <p><strong>Game:</strong> {character.game}</p>
            <p><strong>Description:</strong> {character.description}</p>
            <p><strong>Abilities:</strong> {character.abilities}</p>
            <p><strong>Trivia:</strong> {character.trivia}</p>
        </div>
    );
};

export default CharacterCard;

import React from 'react';
import { Link } from 'react-router-dom';
import '../css/characters.css';

const Characters = () => (
    <div className="characters-page">
        {/* Characters title Section */}
        <section className="characters-section">
            <h1>Video Game Characters</h1>
            <div className="center-container">
                <p className="page-description">
                    Explore iconic video game characters across different universes. Click on any character to learn more about their abilities, background, and role in their game. or add your own
                </p>
                <Link to="/add-character" className="add-character-button"> Add New Character</Link>
                <Link to="/characters-list" className="add-character-button"> CharacterList</Link>
                <Link to="/edit-character" className="add-character-button">Edit Character</Link>
                <Link to="/delete-character" className="add-character-button">Delete Character</Link>
            </div>
        </section>
    </div>
);

export default Characters;
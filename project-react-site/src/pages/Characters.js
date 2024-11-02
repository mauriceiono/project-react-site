import React from 'react';
import { Link } from 'react-router-dom';
import '../css/characters.css';

const characters = [
    {
        id: "mario",
        name: "Mario",
        description: "The beloved plumber who saves the Mushroom Kingdom.",
        image: "images/mario.jpg"
    },
    {
        id: "sonic",
        name: "Sonic the Hedgehog",
        description: "The fastest hedgehog who loves adventure.",
        image: "images/sonic.jpg"
    },
    {
        id: "link",
        name: "Link",
        description: "The courageous hero on a quest to save Princess Zelda.",
        image: "images/link.jpg"
    },
    {
        id: "bowser",
        name: "Bowser",
        description: "The main antagonist of the Mario series.",
        image: "images/bowser.jpg"
    },
    {
        id: "eggman",
        name: "Dr. Eggman",
        description: "Sonic’s arch-nemesis with a love for robotics.",
        image: "images/eggman.jpg"
    },
    {
        id: "ganondorf",
        name: "Ganondorf",
        description: "Link's arch nemesis.",
        image: "images/ganondorf.jpg"
    },
    {
        id: "luigi",
        name: "Luigi",
        description: "Mario’s younger brother and loyal companion.",
        image: "images/luigi.jpg"
    },
    {
        id: "tails",
        name: "Miles \"Tails\" Prower",
        description: "Sonic’s two-tailed fox friend and tech genius.",
        image: "images/tails.jpg"
    },
    {
        id: "fi",
        name: "Fi",
        description: "The spirit of the Master Sword which Link wields.",
        image: "images/fi zelda.jpg"
    }
];

const Characters = () => (
    <div className="characters-page">
        {/* Characters title Section */}
        <section className="characters-section">
            <h1>Video Game Characters</h1>
            <p className="page-description">
                Explore iconic video game characters across different universes. Click on any character to learn more about their abilities, background, and role in their game.
            </p>
        </section>

        <div className="character-grid">
            {characters.map((character) => (
                <div key={character.id} className="character-card">
                    <img src={character.image} alt={character.name} />
                    <h3>{character.name}</h3>
                    <p>{character.description}</p>
                    <Link to={`/characters/${character.id}`} className="view-details-link">View Details</Link>
                </div>
            ))}
        </div>
    </div>
);

export default Characters;

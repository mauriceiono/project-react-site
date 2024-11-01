import React from 'react';
import { Link } from 'react-router-dom';
import '../css/home.css'; // Ensure the correct path to your CSS file

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
];

const Home = () => {
    return (
        <div className="homepage">
            {/* Main Section */}
            <section className="intro-section">
                <h1>Welcome to Video Game Character Hub</h1>
                <p>Explore the fascinating world of iconic video game characters, their stories, and abilities.</p>

                {/* Embed YouTube Video */}
                <div className="video-container">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/fhJEYo4RixQ?si=rKKlG-ua-mL4ddnL"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                </div>
            </section>

            {/* Featured Games Section */}
            <section className="featured-section">
                <h2>Featured Video Games</h2>
                <div className="featured-grid">
                    <div className="featured-card">
                        <img src="images/sonic frontiers.jpg" alt="Sonic Frontiers" />
                        <p>Sonic Frontiers</p>
                    </div>
                    <div className="featured-card">
                        <img src="images/gta 6 frre dowload.jpg" alt="GTA 6" />
                        <p>GTA 6</p>
                    </div>
                    <div className="featured-card">
                        <img src="images/halo 3.jpg" alt="Halo 3" />
                        <p>Halo 3</p>
                    </div>
                </div>
            </section>

            {/* Popular Characters Section */}
            <section className="characters-section">
                <h2>Popular Characters</h2>
                <div className="character-grid">
                    {characters.map(character => (
                        <div className="character-card" key={character.id}>
                            <img src={character.image} alt={character.name} />
                            <h3>{character.name}</h3>
                            <p>{character.description}</p>
                            <Link to={`/characters/${character.id}`} className="view-details-link">View Details</Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* News or Updates Section */}
            <section className="news-section">
                <h2>Latest updates</h2>
                <p>Stay tuned for the latest updates on my website.</p>
            </section>
        </div>
    );
};

export default Home;

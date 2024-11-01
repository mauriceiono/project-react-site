import React from 'react';
import '../css/home.css'; // Ensure the correct path to your CSS file

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
                        <div className="character-card">
                            <img src="images/mario.jpg" alt="Mario" />
                            <h3>Mario</h3>
                            <p>The beloved plumber who saves the Mushroom Kingdom.</p>
                            <a href="character-details.html?character=mario" className="view-details-link">View Details</a>
                        </div>
                        <div className="character-card">
                            <img src="images/sonic.jpg" alt="Sonic" />
                            <h3>Sonic the Hedgehog</h3>
                            <p>The fastest hedgehog who loves adventure.</p>
                            <a href="character-details.html?character=sonic" className="view-details-link">View Details</a>
                        </div>
                        <div className="character-card">
                            <img src="images/link.jpg" alt="Link" />
                            <h3>Link</h3>
                            <p>The courageous hero on a quest to save Princess Zelda.</p>
                            <a href="character-details.html?character=link" className="view-details-link">View Details</a>
                        </div>
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

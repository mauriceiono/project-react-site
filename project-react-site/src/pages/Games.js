import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CharacterCard from '../components/CharacterCard'; 
import '../css/games.css';

// Individual game card for each game in the games list
const GameCard = ({ title, imageSrc, description }) => (
    <div className="game-card">
        <h2>{title}</h2>
        <img src={imageSrc} alt={title} className="game-image" />
        <p>{description}</p>
    </div>
);

// Card for recent releases with title, image, and release date
const ReleaseCard = ({ title, imageSrc, releaseDate }) => (
    <div className="release-card">
        <h3>{title}</h3>
        <img src={imageSrc} alt={`${title} Cover`} className="release-image" />
        <p>Release Date: {releaseDate}</p>
    </div>
);

const Games = () => {
    return (
        <div>
            
            <main>
                {/* Games Section */}
                <section className="games-section">
                    <h1>Games</h1>
                    <p className="page-description">
                        Dive into popular games from various genres. Discover new releases, timeless classics, and updates from your favorite franchises.
                    </p>
                </section>

                {/* Video Games List */}
                <section className="games">
                    <h2>Video Games</h2>
                    <div className="game-list">
                        <GameCard
                            title="Super Mario"
                            imageSrc="images/mario.jpg"
                            description="A classic platformer featuring Mario and his adventures in the Mushroom Kingdom."
                        />
                        <GameCard
                            title="Halo"
                            imageSrc="images/halo 3.jpg"
                            description="A sci-fi shooter where you play as Master Chief, fighting to save humanity."
                        />
                        <GameCard
                            title="Sonic the Hedgehog"
                            imageSrc="images/sonic frontiers.jpg"
                            description="Speed through levels as Sonic, battling Dr. Robotnik and saving animals."
                        />
                        <GameCard
                            title="The Legend of Zelda"
                            imageSrc="images/breath of wid.jpg"
                            description="Embark on epic quests as Link, solving puzzles and battling monsters."
                        />
                    </div>
                </section>

                {/* Popular Genres Section */}
                <section className="genres">
                    <h2>Popular Genres</h2>
                    <ul className="genre-list">
                        <li><strong>Action-Adventure:</strong> Games that combine action with adventure elements.</li>
                        <li><strong>Role-Playing Games (RPGs):</strong> Immerse yourself in a story and develop your character.</li>
                        <li><strong>First-Person Shooters (FPS):</strong> Experience intense shooting action from a first-person perspective.</li>
                        <li><strong>Platformers:</strong> Jump and run through levels, often filled with obstacles.</li>
                        <li><strong>Puzzle:</strong> Solve challenges and puzzles to progress through the game.</li>
                    </ul>
                </section>

                {/* Recent Releases Section */}
                <section className="recent-releases">
                    <h2>Recent Releases</h2>
                    <div className="releases-grid">
                        <ReleaseCard
                            title="Tekken 8"
                            imageSrc="images/tekken 8.jpg"
                            releaseDate="2024"
                        />
                        <ReleaseCard
                            title="The Last of Us Part 2 Remastered"
                            imageSrc="images/Lastofus2.jpg"
                            releaseDate="2024"
                        />
                        <ReleaseCard
                            title="Palworld"
                            imageSrc="images/palworld.jpg"
                            releaseDate="2024"
                        />
                        <ReleaseCard
                            title="Starfield"
                            imageSrc="images/starfield.jpg"
                            releaseDate="2023"
                        />
                        <ReleaseCard
                            title="Cyberpunk 2077: Phantom Liberty"
                            imageSrc="images/Cyberpunk.jpg"
                            releaseDate="2023"
                        />
                        <ReleaseCard
                            title="Spider-Man 2"
                            imageSrc="images/spider2.jpg"
                            releaseDate="2023"
                        />
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Games;

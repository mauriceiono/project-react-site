import React from 'react';

const Header = () => {
    return (
        <header>
            <h1>Video Game Character Hub</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/characters">Characters</a></li>
                    <li><a href="/games">Games</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

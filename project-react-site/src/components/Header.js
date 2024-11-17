// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <h1>Video Game Character Hub</h1>
            <button
    className="hamburger"
    onClick={toggleMenu}
    aria-expanded={isMenuOpen}
    aria-controls="nav-list"
>
    ☰
</button>
<nav id="nav-list" className={`nav-list ${isMenuOpen ? 'open' : ''}`}>
    <ul>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/characters" onClick={toggleMenu}>Characters</Link></li>
        <li><Link to="/games" onClick={toggleMenu}>Games</Link></li>
        <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
    </ul>
</nav>
        </header>
    );
};

export default Header;

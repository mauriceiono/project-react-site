import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <p>Follow us on:</p>
                <ul className="social-media">
                <li><button aria-label="Instagram"><img src="images/ig logo.jpg" alt="Instagram" /></button></li>
                <li><button aria-label="Twitter"><img src="images/x.jpg" alt="Twitter" /></button></li>
                <li><button aria-label="Facebook"><img src="images/face.jpg" alt="Facebook" /></button></li>
                </ul>
            </div>
            <p>&copy; 2024 Video Game Character Hub</p>
        </footer>
    );
};

export default Footer;

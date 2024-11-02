import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <p>Follow us on:</p>
                <ul className="social-media">
                    <li><a href="#"><img src="images/ig logo.jpg" alt="Instagram" /></a></li>
                    <li><a href="#"><img src="images/x.jpg" alt="Twitter" /></a></li>
                    <li><a href="#"><img src="images/face.jpg" alt="Facebook" /></a></li>
                </ul>
            </div>
            <p>&copy; 2024 Video Game Character Hub</p>
        </footer>
    );
};

export default Footer;

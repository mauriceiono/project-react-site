import React from 'react';
import '../css/about.css';

const About = () => {
    return (
        <div className="about-page">
            <section className="about-section">
                
                <h1>About Video Game Character Hub</h1>
                <p> <p>This website is dedicated to providing information on video game characters. Whether you are a casual gamer or a hardcore enthusiast, this platform is here to enhance your knowledge of your favorite characters.</p></p>               
                
                <h2>My Mission</h2>
        <p>My aim is to become a comprehensive resource for all things related to video game characters. My goal is to share in-depth profiles, backstories, and trivia that bring these characters to life.</p>
               
                <h1>Why Video Games?</h1>
            <ul>
            <li>To celebrate iconic characters who have shaped gaming culture.</li>
            <li>To educate gamers about their favorite heroes and villains.</li>
            <li>To provide a community for fans to discuss and share their passion.</li>
            </ul>
            
            <h1>Get Involved!</h1>
        <p>If you are a fan of video games and have something to share, I invite you to join our community! You can contribute by:</p>
        <ul>
            <li>Submitting character profiles</li>
            <li>Participating in discussions</li>
            <li>Sharing your favorite game-related content</li>
        </ul>
            </section>

            {/* Contact Section */}
            <section className="contact-section">
                <div className="contact-form">
                    <h2>Contact Us</h2>
                    <p>If you have any questions or comments, feel free to reach out to us!</p>

                    <form action="#" method="post">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />

                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" required></textarea>

                        <button type="submit">Submit</button>
                    </form>
                </div>

                <div className="contact-info">
                    <h2>Contact Information</h2>
                    <ul>
                        <li><strong>Email:</strong> mthooks@email.sc.edu</li>
                        <li><strong>Phone:</strong> (803) 238-6146</li>
                        <li><strong>Address:</strong> 123 Gaming Lane, Game City, GA 12345</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default About;

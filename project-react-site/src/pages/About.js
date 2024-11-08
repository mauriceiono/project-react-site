import React, { useState } from 'react';
import '../css/about.css';

const About = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Adjust the URL to match the correct API endpoint from the server
        const response = await fetch('http://localhost:3000/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message })
        });

        const result = await response.json();
        if (response.status === 200) {
            setStatus('Message sent successfully!');
        } else {
            setStatus(result.message || 'An error occurred. Please try again.');
        }
    };

    return (
        <div className="about-page">
            <section className="about-section">
                <h1>About Video Game Character Hub</h1>
                <p>This website is dedicated to providing information on video game characters...</p>

                <h2>My Mission</h2>
                <p>My aim is to become a comprehensive resource...</p>

                <h1>Why Video Games?</h1>
                <ul>
                    <li>To celebrate iconic characters...</li>
                    <li>To educate gamers about their favorite heroes and villains...</li>
                    <li>To provide a community...</li>
                </ul>

                <h1>Get Involved!</h1>
                <p>If you are a fan of video games...</p>
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
                    <p>If you have any questions or comments, feel free to reach out!</p>

                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Name:</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            required 
                        />

                        <label htmlFor="email">Email:</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />

                        <label htmlFor="message">Message:</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            value={message} 
                            onChange={(e) => setMessage(e.target.value)} 
                            required 
                        ></textarea>

                        <button type="submit">Submit</button>
                    </form>

                    {status && <p>{status}</p>}
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

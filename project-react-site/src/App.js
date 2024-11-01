import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Characters from './pages/Characters';
import CharacterDetails from '../src/pages/Characterdetails';
import Games from './pages/Games';
import About from './pages/About';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/characters" element={<Characters />} />
                    <Route path="/characters/:id" element={<CharacterDetails />} />
                    <Route path="/games" element={<Games />} />
                    <Route path="/about" element={<About />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;

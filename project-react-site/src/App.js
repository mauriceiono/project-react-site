import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Characters from './pages/Characters';
import CharacterDetails from './pages/Characterdetails';
import Games from './pages/Games';
import About from './pages/About';

function App() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
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
        </BrowserRouter>
    );
}

export default App;

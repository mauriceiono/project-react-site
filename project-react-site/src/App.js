import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Characters from './pages/Characters';
import CharacterDetails from './pages/Characterdetails';
import Games from './pages/Games';
import About from './pages/About';
import AddCharacter from './pages/AddCharacters'; 
import CharacterList from './pages/CharacterList';
import EditCharacter from './pages/EditPage';  
import DeleteCharacter from './pages/DeletePage';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/characters" element={<Characters />} />
                    <Route path="/characters/:id" element={<CharacterDetails />} />
                    <Route path="/games" element={<Games />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/add-character" element={<AddCharacter />} /> 
                    <Route path="/characters-list" element={<CharacterList />} />
                    <Route path="/edit-character" element={<EditCharacter />} /> {/* Route for Edit */}
                    <Route path="/delete-character" element={<DeleteCharacter />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
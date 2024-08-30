import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/main-components/Home';
import Nav from './components/main-components/Nav';
import Footer from './components/main-components/Footer';
import Ladder from './components/main-components/Ladder';
import SearchResults from './components/main-components/SearchResults';
import './App.css';

function App() {
  const [searchParams, setSearchParams] = useState({
    characterName: '',
    realm: '',
    accessToken: '',
  });

  const [characterData, setCharacterData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <Router>
      <div className="App">
        <header>
          <Nav />
        </header>
        <main>
          <Routes>
            <Route 
              path=""
              element={
                <Home 
                  setSearchParams={setSearchParams}
                  setLoading={setLoading}
                  setError={setError}
                />
              } 
            />
            <Route 
              path="/"
              element={
                <Home 
                  setSearchParams={setSearchParams}
                  setLoading={setLoading}
                  setError={setError}
                />
              } 
            />
            <Route 
              path="/home"
              element={
                <Home 
                  setSearchParams={setSearchParams}
                  setLoading={setLoading}
                  setError={setError}
                />
              } 
            />
            <Route 
              path="/search-results" 
              element={
                <SearchResults 
                  searchParams={searchParams}
                  characterData={characterData}
                  setCharacterData={setCharacterData}
                  loading={loading}
                  setLoading={setLoading}
                  error={error}
                  setError={setError}
                />
              } 
            />
            <Route path="/ladder" element={<Ladder />} />
          </Routes>
      
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
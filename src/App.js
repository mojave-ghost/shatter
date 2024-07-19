import React from 'react';
import Home from './components/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Ladder from './components/Ladder';
import Stats from './components/Stats';
import './App.css';



function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <body>
        <Home />
        <Stats />
        <Ladder />
        <Footer />
      </body>

    </div>
  );
}

export default App;

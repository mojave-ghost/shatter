import React from 'react';
import Home from './components/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Ladder from './components/Ladder';
import Search from './components/Search';
import './App.css';



function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <body>
        <Home />
        <Ladder />
        <Footer />
      </body>

    </div>
  );
}

export default App;

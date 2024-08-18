import React from 'react';
import Search from './Search';
import WoWLogo from '../../assets/images/war-within-logo.png';

const Home = () => {
  const handleSearch = (playerName, realm) => {
    console.log('Searching for:', playerName, 'in realm:', realm);
  };
  
  return ( 
    <section id="home" className="relative flex flex-col
                                  items-center justify-center min-h-screen
                                  bg-custom">                                               
      <img 
        src={WoWLogo} 
        alt="DragonflightLogo" 
        className="mt-5 md:mt-10" />
      <div className="relative flex flex-col items-center justify-center">
        <h1 className="font-secondary font-bold text-4xl
                      md:text-5xl md:trackign-widest 
                      text-primaryText tracking-wider">
          SHATTER.IO
        </h1>
        <h2 className="font-primary text-2xl text-primaryText
                        md:tracking-wider md:text-3xl">
          World of Warcraft PvP Search Engine
        </h2>
        <p className="font-primary italic text-xl text-primaryText
                      md:tracking-wide md:text-2xl">
          Find your next opponent or team!
        </p>  
      </div>
      <Search onSearch={handleSearch} />  
    </section>
   );
}
 
export default Home;
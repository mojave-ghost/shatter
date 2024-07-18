import React from 'react';
import Search from './Search';
import WoWLogo from '../assets/images/wow-dragonflight.png';


const Home = () => {
  return ( 
    <section id="home" className="relative flex flex-col
                                  items-center justify-center min-h-screen
                                  bg-custom">                                               
      <img 
        src={WoWLogo} 
        alt="DragonflightLogo" 
        className="bg-background bg-opacity-5 p-5 rounded-lg" />
      <h1 className="font-secondary font-bold text-3xl mt-2">Shatter.io</h1>
      <h2 className="font-primary text-2xl">World of Warcraft PvP Search Engine</h2>
      <p className="font-primary text-lg">Find the best players in the world</p>  
      <Search />  
    </section>
   );
}
 
export default Home;
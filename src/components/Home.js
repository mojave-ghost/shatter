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
      <h1 className="font-secondary font-bold text-4xl mt-2 
                    md:text-5xl md:trackign-widest 
                    text-primaryText tracking-wider">
        SHATTER.IO
      </h1>
      <h2 className="font-primary text-2xl text-primaryText
                      md:tracking-wider md:text-3xl">
        - World of Warcraft PvP Search Engine -
      </h2>
      <p className="font-primary italic text-xl text-primaryText
                    md:tracking-wide md:text-2xl">
        Find the best players in the world.
      </p>  
      <Search />  
    </section>
   );
}
 
export default Home;
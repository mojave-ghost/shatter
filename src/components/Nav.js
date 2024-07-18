/* eslint-disable no-template-curly-in-string */
import React, { useState } from 'react';
import { CiMenuFries } from "react-icons/ci";


const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="nav z-50">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="mx-6 font-secondary tracking-wider
                    text-primaryText text-2xl">
          shatter.io
        </h1>
        <div className="block md:hidden mx-6">
          <button onClick={toggleMenu} 
                  className="text-white focus:outline-none">
            <CiMenuFries className="w-8 h-8"/>
          </button>
        </div>
        <div className={`w-full block flex-grow md:flex md:items-center md:w-auto
                          ${isOpen ? '' : 'hidden'}`}>
          <ul className="md:flex-grow md:flex md:space-x-4">
            <li className="li-nav"><a href="home">Home</a></li>
            <li className="li-nav"><a href="rankings">PvP Rankings</a></li>
            <li className="li-nav"><a href="ladder">Ladder</a></li>
            <li className="li-nav"><a href="about">About</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
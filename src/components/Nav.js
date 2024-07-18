/* eslint-disable no-template-curly-in-string */
import React, { useState } from 'react';
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";


const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="nav z-50">
      <h1 className="mx-4 md:mx-6 font-secondary tracking-wider
                  text-primaryText text-2xl">
        shatter.io
      </h1>
      <div className="flex flex-col items-end justify-center">
        <button onClick={toggleMenu} 
                className="md:hidden">
          <CiMenuFries className={`w-8 h-8 mx-4 ${isOpen ? 'hidden' : ''}`} />
          <IoClose className={`w-8 h-8 mx-4 ${isOpen ? '' : 'hidden'}`}/>
        </button>
        <ul className={`mx-4 md:flex 
                      ${isOpen ? '' : 'hidden'}`}>
          <li className="li-nav"><a href="home">Home</a></li>
          <li className="li-nav"><a href="rankings">PvP Rankings</a></li>
          <li className="li-nav"><a href="ladder">Ladder</a></li>
          <li className="li-nav"><a href="about">About</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
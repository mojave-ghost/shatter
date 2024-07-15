import React from 'react';

const Nav = () => {
  return (
    <nav className="nav z-50">
      <h1 className="mx-4 font-secondary 
                  text-primaryText text-2xl">
        shatter.io
      </h1>
      <ul className="relative flex items-center justify-center mx-2">
        <li className="li-nav"><a href="home">Home</a></li>
        <li className="li-nav"><a href="rankings">PvP Rankings</a></li>
        <li className="li-nav"><a href="ladder">Ladder</a></li>
        <li className="li-nav"><a href="about">About</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
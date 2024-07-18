import React, { useState } from 'react';
import SoloLadder from './ladders/SoloLadder';
import TwosLadder from './ladders/TwosLadder';
import ThreesLadder from './ladders/ThreesLadder';
import RBGLadder from './ladders/RBGLadder';

const Ladder = () => {
  const [visibleTable, setVisibleTable] = useState('solo');

  return ( 
    <section id="ladder" className="my-6">
      <article className="mx-4 font-secondary">
        <h1 className="text-3xl">Dragonflight Season 4</h1>
        <div className="flex items-center justify-center
                        my-6 md:justify-start">
          <button className="button" onClick={ () => setVisibleTable('solo')}>Solo Shuffle</button>
          <button className="button" onClick={ () => setVisibleTable('twos')}>2v2 Arena</button>
          <button className="button" onClick={ () => setVisibleTable('threes')}>3v3 Arena</button>
          <button className="button" onClick={ () => setVisibleTable('rbg')}>10v10 Battlegrounds</button>
        </div>
      </article>

      {visibleTable === 'solo' && <SoloLadder />}
      {visibleTable === 'twos' && <TwosLadder />}
      {visibleTable === 'threes' && <ThreesLadder />}
      {visibleTable === 'rbg' && <RBGLadder />}

    </section>
   );
}
 
export default Ladder;
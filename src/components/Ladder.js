import React, { useState } from 'react';
import SoloLadder from './SoloLadder';
import TwosLadder from './TwosLadder';
import ThreesLadder from './ThreesLadder';
import RBGLadder from './RBGLadder';

const Ladder = () => {
  const [visibleTable, setVisibleTable] = useState('solo');

  return ( 
    <section id="ladder" className="my-24">
      <article className="mx-4 font-secondary ">
        <h1 className="text-2xl">Dragonflight Season 4</h1>
        <div>
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
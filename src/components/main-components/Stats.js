import React from 'react';
import Rating from '../character-stats/Rating';
import Achievements from '../character-stats/Achievements';
import BattleNetFetch from '../api-fetch/BattleNetFetch';

const Stats = () => {
  return ( 
    <section id="stats" className="my-6">
      <article className="relative flex flex-col items-center justify-between
                          md:grid md:grid-cols-2">
        <div className="relative flex items-center justify-center">
          <img src="https://via.placeholder.com/150" alt="Character Avatar" />
        </div>
        <div id="characterStats" className="relative flex flex-col items-center justify-center">
          <h1 className="font-secondary">Character Name</h1>
          <h2 className="font-primary">Realm Name</h2>
          <a href="https://worldofwarcraft.com/en-us/character/us/realm/character-name" target="_blank" rel="noreferrer">Armory</a>
          <h3>Talents</h3>
        </div>
      </article>
      <BattleNetFetch />
      <Achievements />
      <Rating />
    </section>
   );
}

export default Stats;
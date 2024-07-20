import React from 'react';

const Achievements = () => {
  return ( 
    <article id="titles" className="relative flex flex-col items-center justify-center my-4">
      <h2>PvP Titles</h2>
      <h3 className="my-2">Rank 1 count</h3>
      <div className="relative flex flex-col items-center justify-center">
        <h3>Gladiator Titles</h3>
        <ul title="Gladiator Titles">
          <li>Title</li>
          <li>Title</li>
          <li>Title</li>
          <li>Title</li>
          <li>Title</li>
        </ul>
      </div>
      <div className="relative flex flex-col items-center justify-center my-2">
        <h3>Legend Titles</h3>
        <ul>
          <li>Title</li>
          <li>Title</li>
          <li>Title</li>
          <li>Title</li>
          <li>Title</li>
        </ul>
      </div>
      <div className="relative flex flex-col items-center justify-center my-2">
        <h3>Elite count</h3>
        <h3>Duelist count</h3>
        <h3>Rival count</h3>
        <h3>Challenger count</h3>
        <h3>Combatant count</h3>
      </div>
    </article>
   );
}

export default Achievements;

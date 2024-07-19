import React from 'react';

const Stats = () => {
  return ( 
    <section id="stats" className="my-6">
      <article className="relative flex flex-col items-center justify-center
                          md:grid md:grid-cols-2">
        <div id="character">
          <img src="https://via.placeholder.com/150" alt="Character Avatar" />
        </div>
        <div id="characterStats" className="relative flex flex-col items-center justify-center">
          <h1>Character Name</h1>
          <h2>Realm Name</h2>
          <a href="https://worldofwarcraft.com/en-us/character/us/realm/character-name" target="_blank" rel="noreferrer">Armory</a>
          <div className="relative flex flex-col items-center justify-center">
            <h3>Solo Shuffle Rating</h3>
            <p>Rating</p>
            <h3>2v2 Arena Rating</h3>
            <p>Rating</p>
            <h3>3v3 Arena Rating</h3>
            <p>Rating</p>
            <h3>10v10 Battleground Rating</h3>
            <p>Rating</p>
          </div>
        </div>
      </article>

      <article id="titles" className="relative flex flex-col items-center justify-center my-4">
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
    </section>
   );
}
 
export default Stats;
import React from 'react';
import LadderTable from './LadderTable';

const Ladder = () => {
  return ( 
    <section id="ladder" className="my-24">
      <article className="mx-4 font-secondary ">
        <h1 className="text-2xl">Dragonflight Season 4</h1>
        <div>
          <button className="button">Solo Shuffle</button>
          <button className="button">2v2 Arena</button>
          <button className="button">3v3 Arena</button>
          <button className="button">10v10 Battlegrounds</button>
        </div>
      </article>
      <LadderTable />

    </section>
   );
}
 
export default Ladder;
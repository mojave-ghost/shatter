import React from 'react';

const BattleNetFetch = ({ loading, error, characterData }) => {
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (characterData) {
    return (
      <section className="bg-slate-500 w-full">
        <article className="relative flex flex-col items-center justify-center text-center">
          <div className="font-secondary">
            <h1 className="text-3xl">
              {characterData.name}
            </h1>
            <h2 className="text-xl">{characterData.realm}</h2>
          </div>
          <img 
            src={characterData.avatarUrl} 
            alt={`${characterData.name}'s avatar`}
            className="w-48" />
        </article>
        <article className="relative flex items-center justify-center
                            my-2">
          <p className="mx-2">
            <span>{characterData.activeSpec}</span>
            &nbsp;
            {characterData.class}
          </p>
          <p className="mx-2">Level {characterData.level}</p>
          <p className="mx-2">{characterData.race}</p>
        </article>
        <article id="rating" className="mx-6">
          <h2 className="font-secondary text-xl">Rating</h2>
          <p>2v2 Rating: {characterData.twosRating}</p>
          <p>3v3 Rating: {characterData.threesRating}</p>
          <h3 className="font-secondary text-lg">Solo Shuffle</h3>
          <p>{characterData.specOne}: {characterData.soloRating1}</p>
          <p>{characterData.specTwo}: {characterData.soloRating2}</p>
          <p>{characterData.specThree}: {characterData.soloRating3}</p>
          <p>{characterData.specFour}: {characterData.soloRating4}</p>
        </article>
      </section>
    );
  }

  return null;
};

export default BattleNetFetch;
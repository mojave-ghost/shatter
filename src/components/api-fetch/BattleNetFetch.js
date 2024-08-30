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
      <div>
        <h2>{characterData.name}</h2>
        <p>Realm: {characterData.realm}</p>
        <p>Class: {characterData.class}</p>
        <img src={characterData.avatarUrl} alt={`${characterData.name}'s avatar`} />
        <p>3v3 Rating: {characterData.threesRating}</p>
      </div>
    );
  }

  return null;
};

export default BattleNetFetch;
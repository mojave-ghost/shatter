import React from 'react';

const BattleNetFetch = ({ loading, error, characterData }) => {
  
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {characterData && (
        <div>
          <h2>{characterData.name}</h2>
          <h3>{characterData.realm}</h3>
          <p>Class: {characterData.class}</p>
          <img src={characterData.avatarUrl} alt={`${characterData.name}'s avatar`} />
        </div>
      )}
    </div>
  );
};

export default BattleNetFetch;
import React from 'react';
import BattleNetFetch from '../api-fetch/BattleNetFetch';

function Stats({ searchResults }) {
  return (
    <main>
      <h2>Character Information</h2>
      <BattleNetFetch searchResults={searchResults} />
    </main>
  );
}

export default Stats;
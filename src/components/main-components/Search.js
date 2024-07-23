import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [playerName, setPlayerName] = useState('');
  const [realm, setRealm] = useState('');

  const handleSearch = () => {
    onSearch(playerName, realm);
  };

  return (
    <section
      id="search"
      className="bg-background bg-opacity-55 w-3/4 md:w-1/2 mx-auto my-5 p-4 rounded-lg shadow-lg relative flex flex-col items-center justify-center"
    >
      <form
        className="relative flex flex-col items-center justify-center my-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <label htmlFor="playername" className="label">
          Player Name
        </label>
        <input
          type="text"
          name="playername"
          className="input"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
        />
        <label htmlFor="realm" className="label">
          Realm
        </label>
        <input
          type="text"
          name="realm"
          className="input"
          value={realm}
          onChange={(e) => setRealm(e.target.value)}
        />
      </form>
      <button className="button mb-8" onClick={handleSearch}>
        Search
      </button>
    </section>
  );
};

export default Search;
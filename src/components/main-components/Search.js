import React from 'react';

const Search = ({ characterName, realm, setCharacterName, setRealm, handleSubmit, loading  }) => {
  return (
    <section
      id="search"
      className="bg-background bg-opacity-55 w-3/4 md:w-1/2 mx-auto my-5 p-4 rounded-lg shadow-lg relative flex flex-col items-center justify-center"
    >
      <form
        className="relative flex flex-col items-center justify-center my-4"
        onSubmit={handleSubmit}
      >
        <label htmlFor="playername" className="label">
          Player Name
        </label>
        <input
          type="text"
          value={characterName}
          name="playername"
          className="input"
          onChange={(e) => setCharacterName(e.target.value)}
          placeholder="Character Name"
          required
        />
        <label htmlFor="realm" className="label">
          Realm
        </label>
        <input
          type="text"
          value={realm}
          name="realm"
          className="input"
          onChangeCapture={(e) => setRealm(e.target.value)} 
          placeholder="Realm"
          required
        />
      </form>
      <button className="button mb-8" type="submit" disabled={loading} onClick={handleSubmit}>
        Search
      </button>
    </section>
  );
};

export default Search;
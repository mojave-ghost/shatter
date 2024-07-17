import React from 'react';

const Search = () => {
  return ( 
    <section id="search" className="bg-background
                                    relative flex flex-col items-center justify-center">
      <form className="relative flex flex-col items-center justify-center my-4">
        <label htmlFor="playername" className="label">Player Name</label> 
        <input type="text" name="playername" className="input" />
        <label htmlFor="realm" className="label">Realm</label>
        <input type="text" name="realm" className="input" />  
      </form>
      <button className="button mb-8">Search</button>
    </section>
   );
}
 
export default Search;
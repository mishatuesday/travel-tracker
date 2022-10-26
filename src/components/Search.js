import React from 'react';

function Search({searchTerm, setSearchTerm}) {
    
    return (
    <div className="searchbar">
      <label htmlFor="search">Search Destinations:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
    )

   
}







export default Search;
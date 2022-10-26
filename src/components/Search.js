import React from 'react';
import {Input} from 'semantic-ui-react'

const Search = ({searchTerm, setSearchTerm}) => {
    return (
    <div className="searchbar">
      <Input
          icon='search'
          type="text"
          id="search"
          placeholder="Type a name to search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
    )
  
}







export default Search
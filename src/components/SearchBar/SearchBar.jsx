import { useState } from 'react';
import PropTypes from 'prop-types';

function SearchBar  ({ onSearch })  {
  const [searchQuery, setSearchQuery] = useState('');



  const handleQuerySearch = e => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      alert('Enter the film title');
    }

    onSearch(searchQuery);
    setSearchQuery('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} >
        <input
          type="text"
          name="searchQuery"
          value={searchQuery}
          autoComplete="off"
          autoFocus
          placeholder="Search ..."
          onChange={handleQuerySearch}
        
        />
        <button
          type="submit"
      
        >
          Search
        </button>
      </form>
    </>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;

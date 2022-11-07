import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './SearchBar.module.css'
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
      <form className={s.search_form} onSubmit={handleSubmit} >
        <input
        className={s.search_input}
          type="text"
          name="searchQuery"
          value={searchQuery}
          autoComplete="off"
          autoFocus
          placeholder="Search ..."
          onChange={handleQuerySearch}
        
        />
        <button
        className={s.search_button}
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

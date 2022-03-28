import React from 'react';

const SearchBar = () => {
  return (
    <div className='searchbar'>
      <input type='text' className='searchbar__input' />
      <button className='searchbar__button'>
        <i class='fa-solid fa-chevron-right'></i>
      </button>
    </div>
  );
};

export default SearchBar;

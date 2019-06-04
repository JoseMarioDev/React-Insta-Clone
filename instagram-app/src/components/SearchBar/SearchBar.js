import React from 'react';
import './SearchBar.scss';

const SearchBar = () => {
  return (
    <div>
      <div className='navbar'>
        <div className='nav-left'>
          <i class='fab fa-instagram' />
          <div className='logo-text'>Instagram</div>
        </div>
        <div className='nav-center'>
          <i class='fas fa-search' />
          <input type='text' placeholder='search' />
        </div>
        <div className='nav-right'>
          <i class='far fa-compass' />
          <i class='far fa-heart' />
          <i class='far fa-user' />
        </div>
      </div>
      <hr />
    </div>
  );
};

SearchBar.propTypes = {};

export default SearchBar;

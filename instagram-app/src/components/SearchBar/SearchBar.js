import React from 'react';
import './SearchBar.scss';

const SearchBar = () => {
  return (
    <div>
      <div className='navbar'>
        <div className='nav-left'>
          <i className='fab fa-instagram' />
          <div className='logo-text'>Instagram</div>
        </div>
        <div className='nav-center'>
          <i className='fas fa-search' />
          <input type='text' placeholder='search' />
        </div>
        <div className='nav-right'>
          <i className='far fa-compass' />
          <i className='far fa-heart' />
          <i className='far fa-user' />
        </div>
      </div>
      <hr />
    </div>
  );
};

SearchBar.propTypes = {};

export default SearchBar;

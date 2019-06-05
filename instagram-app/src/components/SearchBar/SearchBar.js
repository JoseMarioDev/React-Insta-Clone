import React, { Component } from 'react';
import './SearchBar.scss';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <input
          name='search'
          onChange={this.props.searchFilter}
          placeholder='search'
          type='text'
        />
      </div>
    );
  }
}

SearchBar.propTypes = {};

export default SearchBar;

/* <div>
      <div className='navbar'>
        <div className='nav-left'>
          
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
    </div> */

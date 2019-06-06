import React, { Component } from 'react';
import styled from 'styled-components';

const NavBar = styled.div`
  max-width: 660px;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
`;

const NavLeft = styled.div`
  width: 100px;
  display: flex;
`;

const ImgContainer = styled.div`
  margin-left: 5px;
  border-left: 1px solid lightgray;
  padding-left: 5px;
  width: 100%;
`;

const NavCenter = styled.div`
  display: flex;
`;

const NavRight = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-evenly;
`;

const Img = styled.img`
  width: 100%;
`;

class SearchBar extends Component {
  render() {
    return (
      <NavBar>
        <NavLeft>
          <i className='fab fa-instagram' />
          <ImgContainer>
            <Img
              src='https://logodownload.org/wp-content/uploads/2017/04/instagram-logo-1.png'
              alt=''
            />
          </ImgContainer>
        </NavLeft>

        <NavCenter>
          <input
            name='search'
            onChange={this.props.searchFilter}
            placeholder='search'
            type='text'
          />
        </NavCenter>

        <NavRight>
          <i className='far fa-compass' />
          <i className='far fa-heart' />
          <i className='far fa-user' />
        </NavRight>
      </NavBar>
    );
  }
}

SearchBar.propTypes = {};

export default SearchBar;

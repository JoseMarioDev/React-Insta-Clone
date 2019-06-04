import React, { Component } from 'react';
import './App.scss';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData,
    };
  }

  render() {
    return (
      <div>
        <SearchBar />
        <PostContainer postcontainer={this.state.data} />
      </div>
    );
  }
}

export default App;

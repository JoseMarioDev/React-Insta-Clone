import React, { Component } from 'react';
import './App.scss';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import CommentSection from './components/CommentSection/CommentSection';

export class App extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    this.setState({
      data: dummyData,
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <PostContainer
          postcontainer={this.state.data}
          commentform={
            <form>
              <input
                className='input'
                type='text'
                placeholder='Add a comment...'
              />
            </form>
          }
        />
      </div>
    );
  }
}

export default App;

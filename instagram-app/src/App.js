import React, { Component } from 'react';
import './App.scss';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

export class App extends Component {
  state = {
    data: [],
    filteredPosts: [],
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  componentDidMount() {
    this.setState({ data: dummyData });
  }

  searchFilter = e => {
    const filtered = this.state.data.filter(post =>
      post.username.toLowerCase().includes(e.target.value.toLowerCase()),
    );
    this.setState({ filteredPosts: filtered });
  };

  toggleLike = () => {
    const addLike = this.state.likes + 1;
    this.setState({
      liked: !this.state.liked,
      likes: addLike,
    });
  };

  render() {
    return (
      <div className='App'>
        <SearchBar
          newSearch={this.state.search}
          searchFilter={this.searchFilter}
        />
        <PostContainer
          data={this.state.data}
          filteredPosts={this.state.filteredPosts}
          searchFilter={this.searchFilter}
          toggleLike={this.toggleLike}
        />
      </div>
    );
  }
}

export default App;

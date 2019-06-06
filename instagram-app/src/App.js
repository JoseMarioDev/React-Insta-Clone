import React, { Component } from 'react';
import './App.scss';
import withAuthenticate from './components/Authentication/withAuthenticate';
import Login from './components/Login/Login';
import PostsPage from './components/PostContainer/PostsPage';

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);

export class App extends Component {
  render() {
    return (
      <div className='App'>
        <ComponentFromWithAuthenticate />
      </div>
    );
  }
}

export default App;

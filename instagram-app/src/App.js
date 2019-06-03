import React, { Component } from 'react';
import './App.scss';
import dummyData from './dummy-data';
import UserList from './UserList/UserList';

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
        <UserList userlist={this.state.data} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.signIn}>
          <input type='text' placeholder='username' required />
          <input type='password' placeholder='password' required />
          <button>login</button>
        </form>
      </div>
    );
  }
}

export default Login;

import React, { Component } from 'react';
import Header from '../Header';
import Form from '../../containers/Login';

class Login extends Component {
  render() {
    return (
      <div>
        <Header />
        <Form />
      </div>
    );
  }
}

export default Login;

import React, { Component } from 'react';
import Header from '../Header';
import Form from '../../containers/SignUp';

class SignUp extends Component {
  render() {
    return (
      <div>
        <Header />
        <Form />
      </div>
    );
  }
}

export default SignUp;

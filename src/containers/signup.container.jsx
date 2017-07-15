import React from 'react';
import { connect } from 'react-redux';

import Signup from '../components/signup/signup.component.jsx';
import auth from '../actions/auth';

const mapStateToProps = state => {
  return {
    state: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signUp(credentials) {
      dispatch(auth.signUp(credentials));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
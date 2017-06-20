import React from 'react';
import { connect } from 'react-redux';

import Login from '../components/Login/Form';
import auth from '../actions/auth';

const mapStateToProps = state => {
  return {
    state: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login(credentials) {
      dispatch(auth.login(credentials));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
import React from 'react';
import { connect } from 'react-redux';

import SignUp from '../components/SignUp/Form';
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
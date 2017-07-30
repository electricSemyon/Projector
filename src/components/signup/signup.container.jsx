import React from 'react';
import { connect } from 'react-redux';

import Signup from './signup.component.jsx';
import auth from '../../actions/auth';

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
    signUp(credentials) {
      dispatch(auth.signUp(credentials));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
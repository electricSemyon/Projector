import React, {Component} from 'react';
import { connect } from 'react-redux';
import auth from '../../actions/auth';
import { Redirect } from 'react-router';
import { push } from 'react-router-redux';

const privateRoute = ({user, redirectToLogin, component, ...props}) => {
  console.log(user)
  if (!user)
    redirectToLogin();
  console.log(component)
  return component;
}

const mapStateToProps = store => ({ user: store.auth.user });

const mapDispatchToProps = dispatch => ({
    redirectToLogin() {
      dispatch(push('/login'));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(privateRoute);

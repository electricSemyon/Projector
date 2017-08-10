import React from 'react';
import { connect } from 'react-redux';
import Header from './header.component.jsx';

import auth from '../../actions/auth';

const matStateToProps = store => {
  return {user: store.auth.user};
}
const mapDispatchToProps = dispatch => ({
  logout() {
    dispatch(auth.logout());
  }
})

export default connect(matStateToProps, mapDispatchToProps)(Header);
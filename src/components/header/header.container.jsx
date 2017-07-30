import React from 'react';
import { connect } from 'react-redux';
import Header from './header.component.jsx';

import auth from '../../actions/auth';

const mapDispatchToProps = dispatch => ({
  logout() {
    dispatch(auth.logout());
  }
})

export default connect(store => ({user: store.auth.user}), mapDispatchToProps)(Header);
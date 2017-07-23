import React from 'react';
import { connect } from 'react-redux';

import UserMenu from './user-menu.component.jsx';
import auth from '../../actions/auth';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    logout() {
      dispatch(auth.logout());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
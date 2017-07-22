import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/header/header.component.jsx';

const mapStateToProps = store => {
  return {
    store: store
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
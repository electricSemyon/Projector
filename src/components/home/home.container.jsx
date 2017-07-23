import React from 'react';
import { connect } from 'react-redux';
import Home from './home.component.jsx';

import projects from '../../actions/projects';

const mapStateToProps = store => ({
  list: store.projects.list
})

const mapDispatchToProps = dispatch => ({
  get
})

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
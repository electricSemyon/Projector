import React from 'react';
import { connect } from 'react-redux';
import Dropdown from './dropdown.component.jsx';

import projects from '../../actions/projects';

const mapStateToProps = store => ({
  ...store.projects
})

const mapDispatchToProps = dispatch => ({
  getProjectsList() {
    dispatch(projects.getProjectsList());
  },
  getLatestProject() {
    dispatch(projects.getLatestProject());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
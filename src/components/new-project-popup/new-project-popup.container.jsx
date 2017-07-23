import React from 'react';
import { connect } from 'react-redux';
import NewProjectPopup from './new-project-popup.component.jsx';

import projects from '../../actions/projects';

const mapStateToProps = store => ({})

const mapDispatchToProps = dispatch => ({
  createProject(projectInfo) {
    dispatch(projects.createProject(projectInfo));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(NewProjectPopup);
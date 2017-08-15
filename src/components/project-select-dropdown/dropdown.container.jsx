import React from 'react';
import { connect } from 'react-redux';
import Dropdown from './dropdown.component.jsx';

import projects from '../../actions/projects';

const mapStateToProps = store => {
  return {
    ...store.projects,
    userId: (store.auth.user || {})._id
  }
};

const mapDispatchToProps = dispatch => ({
  switchCurrentProject(id) {
    return dispatch(projects.switchCurrentProject(id));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
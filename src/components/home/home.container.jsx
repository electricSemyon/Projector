import React from 'react';
import { connect } from 'react-redux';
import Home from './home.component.jsx';

import projects from '../../actions/projects';
import auth from '../../actions/auth';

const mapStateToProps = store => ({
  projects: store.projects
});

const mapDispatchToProps = dispatch => ({
    getUser() {
      return dispatch(auth.getUser());
    },

    getProjectsList() {
      return dispatch(projects.getProjectsList());
    },

    getLatestProject() {
      return dispatch(projects.getLatestProject());
    },
});


export default connect(mapStateToProps, mapDispatchToProps)(Home);
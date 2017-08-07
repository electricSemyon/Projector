import React from 'react';
import { connect } from 'react-redux';
import ProjectPage from './project-page.component.jsx';

const mapStateToProps = store => ({
  latestProject: store.projects.latest
});

export default connect(mapStateToProps)(ProjectPage);
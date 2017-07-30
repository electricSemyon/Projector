import React from 'react';
import { connect } from 'react-redux';
import ProjectPage from './project-page.component.jsx';

const mapStateToProps = store => ({
  latestProject: store.projects.latest
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage);
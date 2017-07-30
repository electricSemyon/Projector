import React from 'react';
import { connect } from 'react-redux';
import Home from './home.component.jsx';

import projects from '../../actions/projects';

const mapStateToProps = store => ({
  projects: store.projects
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
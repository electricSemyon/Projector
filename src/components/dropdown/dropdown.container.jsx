import React from 'react';
import { connect } from 'react-redux';
import Dropdown from './dropdown.component.jsx';

import projects from '../../actions/projects';

const mapStateToProps = store => ({
  list: store.projects.list
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
import React from 'react';
import { connect } from 'react-redux';
import ProjectPage from './project-page.component.jsx';

import invites from '../../actions/invites';

const mapStateToProps = store => ({
  latestProject: store.projects.latest,
  currentUser: store.auth.user
});

const mapDispatchToProps = dispatch => ({
  sendInvites(info) {
    dispatch(invites.sendInvites(info));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage);
import React from 'react';
import { connect } from 'react-redux';
import BoardsList from './boards-list.component.jsx';
import boards from '../../actions/boards';

const mapStateToProps = store => ({
    currentProject: store.projects.latest,
    boards: store.boards.list
  });

const mapDispatchToProps = dispatch => ({
  createNewBoard(info, projectId) {
    dispatch(boards.createBoard(info));
  },

  getBoardsList(projectId) {
    return dispatch(boards.getBoardsList(projectId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardsList);
import axios from 'axios';
import { push } from 'react-router-redux';
import tokenInstance from './api/token-instance';

const CREATE_BOARD = 'CREATE_BOARD';
const GET_BOARDS = 'GET_BOARDS';

const createBoardSuccess = response => ({ type: CREATE_BOARD, payload: response.data });
const getBoardsSuccess = boards => ({ type: GET_BOARDS, payload: boards });

const createBoard = (boardInfo, projectId) => dispatch =>
  tokenInstance()
    .post(`/api/boards`, boardInfo)
    .then(res => dispatch(createBoardSuccess(res)))
    .catch(err => console.log(err));

const getBoardsList = (projectId) => dispatch =>
  tokenInstance()
    .get(`/api/projects/${projectId}/boards`)
    .then(res => dispatch(getBoardsSuccess(res.data)))
    .catch(err => {
      if(err.response.status === 404)
        dispatch(getBoardsSuccess(null));
      console.log(err)
    });

export default {
  createBoard,
  getBoardsList
}
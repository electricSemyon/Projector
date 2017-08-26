import tokenInstance from './api/token-instance';

const CREATE_BOARD = 'CREATE_BOARD';
const GET_BOARDS = 'GET_BOARDS';
const GET_DETAILED_BOARD = 'GET_DETAILED_BOARD';

const createBoardSuccess = response => ({ type: CREATE_BOARD, payload: response.data });
const getBoardsSuccess = boards => ({ type: GET_BOARDS, payload: boards });
const getDetailedBoardSuccess = board => ({ type: GET_DETAILED_BOARD, payload: board });

const createBoard = (boardInfo, projectId) => dispatch =>
  tokenInstance()
    .post(`/api/boards`, boardInfo)
    .then(res => dispatch(createBoardSuccess(res)))
    .catch(err => console.log(err));

const getBoardsList = projectId => dispatch =>
  tokenInstance()
    .get(`/api/projects/${projectId}/boards`)
    .then(res => dispatch(getBoardsSuccess(res.data)))
    .catch(err => {
      if(err.response.status === 404)
        dispatch(getBoardsSuccess(null));
      console.log(err)
    });

const getBoard = boardId => dispatch =>
  tokenInstance()
    .get(`/api/boards/${boardId}`)
    .then(res => dispatch(getDetailedBoardSuccess(res.data)))
    .catch(console.log);

export default {
  createBoard,
  getBoardsList,
  getBoard
}
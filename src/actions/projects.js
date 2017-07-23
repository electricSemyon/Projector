import axios from 'axios';
import { push } from 'react-router-redux';

import tokenInstance from './api/token-instance';
import formInstance from './api/form-instance';
import tokenFormInstance from './api/token-form-instance';

const GET_PROJECT = 'GET_PROJECTS_LIST';
const POST_PROJECT = 'POST_PROJECT_SUCCESS';

const getProjectsListSuccess = (list) => ({ type: GET_PROJECT, payload: list });
const postProjectSuccess = () => ({ type: POST_PROJECT, payload: {} });

const getProjectsList = () => dispatch =>
  tokenInstance
    .get(`/api/projects`)
    .then(res => dispatch(getProjectsListSuccess(res.data)))
    .catch(err => {
      console.log(err)
    })

const createProject = (projectInfo) => dispatch =>
  tokenFormInstance
    .post(`/api/projects`, projectInfo)
    .then(res => console.log(res))
    .catch(err => console.log(err))

export default {
  getProjectsList,
  createProject
}
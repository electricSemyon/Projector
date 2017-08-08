import axios from 'axios';
import { push } from 'react-router-redux';

import tokenInstance from './api/token-instance';
import formInstance from './api/form-instance';
import tokenFormInstance from './api/token-form-instance';

const GET_PROJECT = 'GET_PROJECTS_LIST';
const GET_LATEST_PROJECT = 'GET_LATEST_PROJECT';
const POST_PROJECT = 'POST_PROJECT_SUCCESS';
const CREATE_PROJECT = 'CREATE_PROJECT';

const getProjectsListSuccess = (list) => ({ type: GET_PROJECT, payload: list });
const switchLatestProject = (project) => ({ type: GET_LATEST_PROJECT, payload: project });
const postProjectSuccess = () => ({ type: POST_PROJECT, payload: {} });
const createProjectSuccess = project => ({ type: CREATE_PROJECT, payload: project });

const tokenInstanseGet = (url, callback) => tokenInstance()
  .get(url)
  .then(res => callback(res))
  .catch(err => {
    console.log(err)
  });

const getProjectsList = () => dispatch =>
  tokenInstanseGet(`/api/projects`, res => dispatch(getProjectsListSuccess(res.data)));

const getLatestProject = () => dispatch =>
  tokenInstanseGet(`/api/projects/latest`, res => dispatch(switchLatestProject(res.data)));

const createProject = (projectInfo) => dispatch =>
  tokenFormInstance()
    .post(`/api/projects`, projectInfo)
    .then(res => dispatch(createProjectSuccess(res.data)))
    .catch(err => console.log(err));

const switchCurrentProject = (project) => dispatch =>
  dispatch(switchLatestProject(project));

export default {
  getProjectsList,
  getLatestProject,
  createProject,
  switchCurrentProject
}
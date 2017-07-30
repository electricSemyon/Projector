import React, {Component} from 'react';
import {Route, IndexRoute} from 'react-router';

import Login from '../components/login/login.container.jsx';
import Signup from '../components/signup/signup.container.jsx';
import Home from '../components/home/home.container.jsx';

import ProjectPage from '../components/project-page/project-page.container.jsx';
import BoardsList from '../components/boards-list/boards-list.component.jsx';

const Routes =
  (<div>
    <Route path="/" component={() => <div></div>}/>
    <Route path="/home" component={Home}>
      <IndexRoute component={ () => <div>some sample placeholder text</div> }/>

      <Route path="project" component={ProjectPage}/>
      <Route path="boards" component={BoardsList}/>
      <Route path="settings" component={() => <div>here are some settings</div>}/>
    </Route>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/signup" component={Signup}/>
  </div>);

export default Routes;

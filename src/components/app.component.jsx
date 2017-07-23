import React, {Component} from 'react';
import { connect } from 'react-redux';
import auth from '../actions/auth';
import projects from '../actions/projects';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentWillMount() {
    this.props.getUser()
      .then(() => this.props.getProjectsList())
  }

  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}

const mapStateToProps = store => ({store: store });

const mapDispatchToProps = dispatch => {
  return {
    getUser() {
      return dispatch(auth.getUser());
    },
    getProjectsList() {
      dispatch(projects.getProjectsList());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, {Component} from 'react';
import { connect } from 'react-redux';
import auth from '../actions/auth';
import Grid from 'material-ui/Grid';
import projects from '../actions/projects';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentWillMount() {
    this.props.getUser();
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = store => ({store: store });

const mapDispatchToProps = dispatch => {
  return {
    getUser() {
      return dispatch(auth.getUser());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

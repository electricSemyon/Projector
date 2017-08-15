import React from 'react';
import PropTypes from 'prop-types';

class Fetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    }
  }

  componentWillMount() {
    this.props.resolve.then(() => this.setState({ isLoaded: true })).then(() => this.props.onResolve());
  }

  render() {
    return this.state.isLoaded
        ? this.props.children
        : null
  }
};

Fetch.propTypes = {
  resolve: PropTypes.object,
  onResolve: PropTypes.func
};

export default Fetch;
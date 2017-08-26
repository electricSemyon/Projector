import React from 'react';
import PropTypes from 'prop-types';

class Fetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    }
    console.log('fetch')
  }

  componentWillMount() {
    this.props.resolve.then(() => this.setState({ isLoaded: true })).then(() => this.props.onResolve());
  }

  render() {
    console.log(this.state.isLoaded)
    return this.state.isLoaded
        ? <div>{this.props.children}</div>
        : null
  }
};

Fetch.propTypes = {
  resolve: PropTypes.object,
  onResolve: PropTypes.func
};

export default Fetch;
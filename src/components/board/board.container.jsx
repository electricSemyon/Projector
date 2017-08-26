import React, {Component} from 'react';
import {connect} from 'react-redux';
import Column from './column.component.jsx';
import './board.style.scss'
import boards from '../../actions/boards';
import Dragula from 'react-dragula';
import Fetch from '../utils/fetch.jsx'

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      columnsDrake: Dragula([], {
        moves: (el, container, handle) => handle.classList.contains('ticket')
          || handle.parentNode.classList.contains('ticket'),
      }),
      isLoaded: false
    }
  }

  componentWillMount() {
    this.props.getBoard(this.props.params.id).then(() => this.setState({isLoaded: true}));
  }

  render() {
    return (
      <div className="board" ref={this.dragulaBoard}>
        {
          this.state.isLoaded
            ? this.props.board.columns.map(column => <Column title={column.title} list={column.cards} getRef={this.dragulaColumns} />)
            : null
        }
      </div>
    )
  }

  dragulaBoard = (componentBackingInstance) => {
    if (componentBackingInstance) {
      const options = {
        moves: (el, container, handle) => handle.classList.contains('column-header')
          || handle.parentNode.classList.contains('column-header'),
        direction: 'horizontal'
      };
      Dragula([componentBackingInstance], options);
    }
  };

  dragulaColumns = (componentBackingInstance) => {
    if (componentBackingInstance)
      this.state.columnsDrake.containers.push(componentBackingInstance)
  };
}

const mapStateToProps = state => ({
  board: state.boards.detailed
});

const mapDispatchToProps = dispatch => ({
  getBoard(id) {
    return dispatch(boards.getBoard(id))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);

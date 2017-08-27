import React, {Component} from 'react';
import PropTypes from 'prop-types';
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
            ? this.props.board.columns.map(column =>
              <Column title={column.title} id={column._id} list={column.cards}
                      createTicket={(columnId, description) =>
                        this.props.createTicket(this.props.board._id, columnId, description)}
                      getRef={this.dragulaColumns} />)
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
      const boardDrake = Dragula([componentBackingInstance], options);
      let fromPos, toPos;

      const handleDragBegin = (e, a) => {
        console.log(Array.prototype.indexOf.call(a.children, e))
      };

      const handleDrop = (e, a) => {

      };

      boardDrake.on('drag', handleDragBegin);
      boardDrake.on('drop', handleDrop);
    }
  };

  dragulaColumns = (componentBackingInstance) =>
      componentBackingInstance && this.state.columnsDrake.containers.push(componentBackingInstance);
}

const mapStateToProps = state => ({
  board: state.boards.detailed
});

const mapDispatchToProps = dispatch => ({
  getBoard(id) {
    return dispatch(boards.getBoard(id))
  },
  createTicket(boardId, columnId, ticket) {
    console.log(boardId, columnId, ticket)
    return dispatch(boards.createTicket(boardId, columnId, ticket));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);

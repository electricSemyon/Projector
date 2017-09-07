import React, {Component} from 'react';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Column from './column.component.jsx';
import './board.style.scss'
import boards from '../../actions/boards';
import Dragula from 'react-dragula';

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false
    };

    this.columnsDrake = Dragula([], {
      moves: (el, container, handle) => handle.classList.contains('ticket')
      || handle.parentNode.classList.contains('ticket'),
    });
  }

  componentWillMount() {
    this.columnsDrake.on('drop', (e, a) => {
      const ticketId = this.getId(e); //id is always the second class of object. It`s shitcode, needs refactoring. TODO
      const newTicketPosition = [].map.call(a.children, child => this.getId(child)).indexOf(ticketId);

      this.props.moveColumn(ticketId, newTicketPosition);
    });

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

      boardDrake.on('drop', (e, a) =>
        this.moveThing(e, a, this.props.moveColumn));
    }
  };

  moveThing = (item, container, callback) => {
    const itemId = this.getId(item); //id is always the second class of object. It`s shitcode, needs refactoring. TODO
    const newItemPosition = [].map.call(container.children, child => this.getId(child)).indexOf(itemId) + 1;

    callback(itemId, newItemPosition);
  };

  dragulaColumns = (componentBackingInstance) =>
      componentBackingInstance && this.columnsDrake.containers.push(componentBackingInstance);

  getId = node => node.classList[1];
}

const mapStateToProps = state => ({
  board: state.boards.detailed
});

const mapDispatchToProps = dispatch => ({
  getBoard: (id) => dispatch(boards.getBoard(id)),
  createTicket: (boardId, columnId, ticket) => dispatch(boards.createTicket(boardId, columnId, ticket)),
  moveColumn: (_id, position) => dispatch(boards.moveColumn(_id, position))
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);

import React, {Component} from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Menu, { MenuItem } from 'material-ui/Menu';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import BoardItem from './board-item.jsx';
import AddButton from '../fab-buttons/add-fab-button.component.jsx';

import margin from '../utils/margin.component.jsx';
import Show from '../utils/show.jsx';
import './boards-list.style.scss';

class BoardsList extends Component {
  constructor(props) {
    super(props);
    this.state = {addMenuOpened: false, title: '', description: ''};

    this.toggleAddMenu = this.toggleAddMenu.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.createBoard = this.createBoard.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.currentProject != nextProps.currentProject)
      this.props.getBoardsList(nextProps.currentProject._id);
  }

  toggleAddMenu(e) {
    this.setState({addMenuOpened: !this.state.addMenuOpened, abbButtonAnchor: e ? e.target : this.state.abbButtonAnchor});
  }

  handleTitleChange(event) {
    this.setState({title: event.target.value})
  }

  handleDescriptionChange(event) {
    this.setState({description: event.target.value})
  }

  createBoard(event) {
    this.props.createNewBoard({
      name: this.state.title,
      description: this.state.description,
      projectId: this.props.currentProject._id
    });
    this.toggleAddMenu();
  }

  render() {
    const boards = this.props.boards || [];

    const boardsList =
      (<div className="boards-list">
          {boards.map(board => <BoardItem members={board.users} name={board.name} description={board.description}/>)}
       </div>);

    const menu = (<Menu
        id="long-menu"
        anchorEl={this.state.abbButtonAnchor}
        open={this.state.addMenuOpened}
        onRequestClose={this.toggleAddMenu}
        MenuListProps={{
          style: {
            width: 250,
            height: 400,
            padding: 32
          },
        }}
      >
        <div className="no-outline">
          <TextField id="board-title" fullWidth label="Board title" marginForm
                     onChange={this.handleTitleChange}/>
          {margin(12)}
          <TextField id="board-description" fullWidth label="Board description" marginForm
                     onChange={this.handleDescriptionChange}/>
          {margin(32)}
          <Button color="primary" raised className="full-width" onClick={this.createBoard}>create board</Button>
        </div>
      </Menu>);

    const noBoardsPlaceholder =
      (<div className="no-boards-placeholder">
          There is no boards assigned to this project. You can <a href="javascript:;">create one</a>.
       </div>);

    return (
      <div className="boards-list-wrapper">
        <Show ifTrue={this.props.boards}>{boardsList}</Show>
        <Show ifTrue={!this.props.boards}>{noBoardsPlaceholder}</Show>
        <AddButton onClick={this.toggleAddMenu}/>
        {menu}
      </div>
    );
  }
}

export default BoardsList;

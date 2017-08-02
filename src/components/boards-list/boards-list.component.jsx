import React, {Component} from 'react';
import BoardItem from './board-item.jsx';

const boardsListContainerStyles = {padding: '12px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}

class BoardsList extends Component {
  render() {
    const boardMock = [
      {
        members: [
          {avatar: 'uploads/icon-1501181449438.jpeg', name: 'Kekoos'},
          {avatar: 'uploads/icon-1501181449438.jpeg', name: 'Kekoos'},
          {avatar: 'uploads/icon-1501181449438.jpeg', name: 'Kekoos'},
          {avatar: 'uploads/icon-1501181449438.jpeg', name: 'Kekoos'},
          {avatar: 'uploads/icon-1501181449438.jpeg', name: 'Kekoos'},
          {avatar: 'uploads/icon-1501181449438.jpeg', name: 'Kekoos'},
        ]
      },
      {
        members: [
          {avatar: 'uploads/icon-1501181449438.jpeg', name: 'Kekoos'},
          {avatar: 'uploads/icon-1501181449438.jpeg', name: 'Kekoos'},
          {avatar: 'uploads/icon-1501181449438.jpeg', name: 'Kekoos'},
          {avatar: 'uploads/icon-1501181449438.jpeg', name: 'Kekoos'},
          {avatar: 'uploads/icon-1501181449438.jpeg', name: 'Kekoos'},
          {avatar: 'uploads/icon-1501181449438.jpeg', name: 'Kekoos'},
        ]
      }
    ]
    return (
      <div style={boardsListContainerStyles}>
        {boardMock.map(board => <BoardItem members={board.members}/>)}
      </div>
    );
  }
}

export default BoardsList;

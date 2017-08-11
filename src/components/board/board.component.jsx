import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import { LinearProgress } from 'material-ui/Progress';
import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';
import Show from '../utils/show.jsx';
import Margin from '../utils/margin.component.jsx';

import './board.style.scss'

class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="board">
        <div className="column">
          <Paper className="column-header" style={{backgroundColor: '#FFDB7F'}}>
            <Typography type="title">To do</Typography>
          </Paper>

          <Margin height={16}/>

          <Paper className="ticket">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, consequatur dolorum ea earum enim eum ex inventore maxime numquam quis, quos repellat? Ab alias amet assumenda aut, culpa dicta est, illo molestiae necessitatibus non nostrum, quaerat rem similique soluta vero?
          </Paper>
        </div>
      </div>
    )
  }
}

export default Board;

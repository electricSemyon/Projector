import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Margin from '../utils/margin.component.jsx';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui-icons/MoreVert';

import './board.style.scss'

class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="board">
        <div className="column">
          <Paper className="column-header" style={{backgroundColor: 'rgb(181, 63, 63)'}}>
            <Typography style={{color: '#fff'}} type="title">
              To do
            </Typography>
          </Paper>

          <Margin height={16}/>

          <Paper className="new-ticket-input">
            <TextField fullWidth multiline placeholder="Describe your issue" rows="2" rowsMax="4"/>
            <Margin height={8}/>
            <Button raised className="full-width">create issue</Button>
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

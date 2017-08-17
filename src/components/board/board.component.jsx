import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Margin from '../utils/margin.component.jsx';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui-icons/MoreVert';

import Ticket from './ticket.component.jsx';

import './board.style.scss'

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dragging: false
    }
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

          <Ticket label="Hello, i am Slaventy`s ticket"
                  id={1488}
                  isPicked={false}/>

          <Margin height={16}/>

          <Ticket label="My application is piece of dog shit. What can i do about it?"
                  id={1337}
                  isPicked={false}/>
        </div>
      </div>
    )
  }
}

export default Board;

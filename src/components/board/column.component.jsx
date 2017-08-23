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

const ColumnHeader = () => (
  <Paper className="column-header" style={{backgroundColor: 'rgb(181, 63, 63)'}}>
    <Typography style={{color: '#fff'}} type="title">
      To do
    </Typography>
  </Paper>
);

const NewTicketInput = () => (
  <Paper className="new-ticket-input">
    <TextField fullWidth multiline placeholder="Describe your issue" rows="2" rowsMax="4"/>
    <Margin height={8}/>
    <Button raised className="full-width">create issue</Button>
  </Paper>
);

const renderTicketsList = list => list.map(ticket => <Ticket label={ticket.description} id={ticket._id} style={{marginBottom: 12}}/>);

class Column extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dragging: false
    };
  }

  render() {
    return (
      <div className="column">
        <ColumnHeader/>
        <Margin height={16}/>

        <NewTicketInput/>
        <Margin height={16}/>

        {renderTicketsList(this.props.list)}
      </div>
    )
  }
}

export default Column;

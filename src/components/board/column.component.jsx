import React, {Component} from 'react';
import * as ReactDOM from 'react-dom';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Margin from '../utils/margin.component.jsx';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Dragula from 'react-dragula';


import Ticket from './ticket.component.jsx';

import './board.style.scss'

const ColumnHeader = ({title}) => (
  <Paper className="column-header" style={{backgroundColor: '#f1f8ff'}}>
    <Typography type="title">
      {title}
    </Typography>
  </Paper>
);

const NewTicketInput = ({id, createTicket, onChange, ...props}) => (
  <Paper className="new-ticket-input">
    <TextField fullWidth multiline onChange={onChange} placeholder="Describe your issue" rows="2" rowsMax="4"/>
    <Margin height={8}/>
    <Button raised onClick={createTicket} className="full-width">create issue</Button>
  </Paper>
);

const renderTicketsList = list => list.map(ticket => <Ticket label={ticket.description}
                                                       id={ticket._id}
                                                       style={{marginBottom: 12}}/>);

class Column extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTicketValue: ''
    };
  }

  createTicket = () => this.props.createTicket(this.props.id, this.state.newTicketValue);

  render() {
    return (
      <div className={`column ${this.props.id}`}>
        <ColumnHeader title={this.props.title}/>

        <NewTicketInput onChange={e => this.setState({newTicketValue: e.target.value}) }
                        createTicket={this.createTicket}/>

        <div className="tickets"  ref={this.props.getRef}>
          {renderTicketsList(this.props.list)}
        </div>
      </div>
    )
  }
}

export default Column;

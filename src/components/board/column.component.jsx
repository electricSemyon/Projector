import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Margin from '../utils/margin.component.jsx';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Show from '../utils/show.jsx';
import Ticket from './ticket.component.jsx';

import './board.style.scss'

const ColumnHeader = ({title, onClick}) => (
  <Paper className="column-header" style={{backgroundColor: '#f1f8ff'}} onClick={onClick}>
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

const renderTicketsList = list =>
  list.map(ticket => <Ticket label={ticket.description} id={ticket._id} style={{marginBottom: 12}}/>);

class Column extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNewTicketInputOpened: false,
      newTicketValue: ''
    };
  }

  createTicket = () => this.props.createTicket(this.props.id, this.state.newTicketValue);

  toggleNewTicketInput = () => this.setState({isNewTicketInputOpened: !this.state.isNewTicketInputOpened});

  render() {
    return (
      <div className={`column ${this.props.id}`}>
        <ColumnHeader title={this.props.title} onClick={this.toggleNewTicketInput}/>

        <Show ifTrue={this.state.isNewTicketInputOpened}>
          <NewTicketInput onChange={e => this.setState({newTicketValue: e.target.value})}
                          createTicket={this.createTicket}/>
        </Show>


        <div className="tickets"  ref={this.props.getRef}>
          {renderTicketsList(this.props.list)}
        </div>
      </div>
    )
  }
}

export default Column;

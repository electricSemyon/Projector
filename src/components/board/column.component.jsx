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
  <Paper className="column-header" style={{backgroundColor: 'rgb(181, 63, 63)'}}>
    <Typography style={{color: '#fff'}} type="title">
      {title}
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


class Column extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dragging: false
    };
  }

  renderTicketsList = list => list.map(ticket => <Ticket label={ticket.description}
                                                         id={ticket._id}
                                                         style={{marginBottom: 12}}/>);

  componentDidMount() {

  }

  render() {
    return (
      <div className="column">
        <ColumnHeader title={this.props.title}/>

        <NewTicketInput/>
        <div className="tickets"  ref={this.props.getRef}>
          {this.renderTicketsList(this.props.list)}
        </div>
      </div>
    )
  }
}

export default Column;

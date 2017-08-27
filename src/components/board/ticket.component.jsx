import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Margin from '../utils/margin.component.jsx';
import MoreVertIcon from 'material-ui-icons/MoreVert';

import ReactEmoji from 'react-emoji';

import './ticket.style.scss';

class Ticket extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Paper className="ticket"
             ref="ticket">
        <a href="javascript:;">{this.props.id}</a>
        <Margin height={8}/>
        <Typography component="p">{ReactEmoji.emojify(this.props.label)}</Typography>
      </Paper>
    )
  }
};

Ticket.propTypes = {
  id: PropTypes.number,
  picked: PropTypes.bool,
  label: PropTypes.string
};

export default Ticket;

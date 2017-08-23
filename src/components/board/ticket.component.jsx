import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Margin from '../utils/margin.component.jsx';
import MoreVertIcon from 'material-ui-icons/MoreVert';

import './ticket.style.scss';

class Ticket extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isPicked: false,
      position: {
        x: 0,
        y: 0
      }
    }
  }

  componentWillMount() {
    document.addEventListener('mousemove', e => {
      if(this.state.isPicked) {
        this.setState({position: {
          x: e.pageX,
          y: e.pageY
        }}, () => console.log(this.state.position));
      }
    });
  }

  componentDidMount() {
    const {width, height} = ReactDOM.findDOMNode(this.refs.ticket).getBoundingClientRect();

    this.width = width;
    this.height = height;
  }

  render() {
    //console.log(`scale(1.01) translate(${this.state.position.x}px ${this.state.position.y}px)`)
    const hoverStyles = {
      position: 'absolute',
      transform: 'scale(1.05)',
      top: `${this.state.position.y - this.height / 2}px`,
      left: `${this.state.position.x - this.width / 2}px`
      //transform: `translate(${this.state.position.x}px, ${this.state.position.y}px)`
    };

    return (
      <Paper className="ticket"
             elevation={this.state.isPicked ? 10 : 2}
             ref="ticket"
             onMouseDown={e => {
               e.preventDefault();
               this.setState({
                 isPicked: true,
                 position: {
                   x: ReactDOM.findDOMNode(this.refs.ticket).left,
                   y: ReactDOM.findDOMNode(this.refs.ticket).top,
                 }
               })
             }}
             onMouseUp={() => this.setState({isPicked: false})}
             style={{
               ...this.props.style,
               ...(this.state.isPicked && this.state.position.x && this.state.position.y ? {...hoverStyles} : {})
             }}>
        <a href="javascript:;">{this.props.id}</a>
        <Margin height={8}/>
        <Typography component="p">{this.props.label}</Typography>
      </Paper>
    )
  }
}

Ticket.propTypes = {
  id: PropTypes.number,
  picked: PropTypes.bool,
  label: PropTypes.string
};

export default Ticket;

import React, {Component} from 'react';
import TextField from 'material-ui/TextField';

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDirty: false,
      isValid: false,
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({ value: value });
    this.props.handleChange(value);
  }

  validate(value) {
    this.setState({ isDirty: true });
    this.setState({ isValid: this.props.validate(value) });
    console.log(this.state)
  }
  render() {
    return (
      <TextField label={this.props.label}
                 type={this.props.type}
                 fullWidth={this.props.fullWidth}
                 value={this.state.value}
                 onChange={event => this.handleChange(event)}
                 onBlur={() => this.validate(this.state.value)}
                 marginForm
                 error={!this.state.isValid && this.state.isDirty}/>
    );
  }
}

export default Input;

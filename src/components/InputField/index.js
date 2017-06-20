import React, {Component} from 'react';
import TextField from 'material-ui/TextField';

class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    const {onChange, validate, ...customProps} = this.props;
    this.customProps = customProps;

    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleBlur() {
    //this.props.validate should return an object
    //{ valid: boolean, message: string }
    if(!this.props.validate) return;

    const result = this.props.validate(this.state.value);
    this.setState({ errorText: result.message });
  }

  handleChange(event, value) {
    this.setState({ value: value });
    this.props.onChange(event, value);
  }

  render() {
    return (
      <TextField {...this.customProps}
                 value={this.state.value}
                 errorText={this.state.errorText}
                 onChange={this.handleChange}
                 onBlur={this.handleBlur}
      />
    );
  }
}

export default InputField;

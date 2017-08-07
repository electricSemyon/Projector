import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import Chip from 'material-ui/Chip';
import margin from '../utils/margin.component.jsx';
import './chips-input.style.scss';

class ChipsInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      chips: []
    };

    this.handleAddChip = this.handleAddChip.bind(this);
    this.deleteChip = this.deleteChip.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    this.inputRef.addEventListener('keypress', this.handleAddChip);
  }

  componentWillUnmount() {
    this.inputRef.removeEventListener('keypress', this.handleAddChip);
  }

  deleteChip(label) {
    this.setState({chips: this.state.chips.filter(chip => chip != label)})
  }

  handleAddChip(e) {
    if(e.keyCode === 13)
      this.setState({chips: [...this.state.chips, this.state.inputValue], inputValue: ''});
  }

  handleInputChange(e) {
    this.setState({inputValue: e.target.value});
  }

  render() {
    const renderChip = label => <Chip style = {{marginBottom: 8, marginRight: 8}}
                                      label = {label}
                                      onRequestDelete = {() => this.deleteChip(label)}/>;

    return (
      <div>
        <TextField className = "chip-input"
                   fullWidth
                   label = "Member email"
                   marginForm
                   inputRef = {ref => this.inputRef = ref}
                   onChange = {this.handleInputChange}
                   value = {this.state.inputValue} >
        </TextField>

        {margin(8)}

        <div className = "chips">
          {this.state.chips.map(chip => renderChip(chip))}
        </div>
      </div>
    );
  }
}

export default ChipsInput;

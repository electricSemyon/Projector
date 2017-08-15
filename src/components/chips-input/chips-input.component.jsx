import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import Chip from 'material-ui/Chip';
import Margin from '../utils/margin.component.jsx';
import Avatar from 'material-ui/Avatar';
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

  deleteChip(chip) {
    this.setState({chips: this.state.chips.filter(_chip => _chip.label != chip.label)},
      () => this.props.onAddChip(null, this.state.chips));
  }

  handleAddChip(e) {
    if(e.keyCode === 13) {
      const addedChip = {label: this.state.inputValue};

      const updateChips = newChipsArray => {
        this.props.onAddChip(addedChip, newChipsArray);
        this.setState({chips: newChipsArray, inputValue: ''});
      };

      if(!this.props.middleware) {
        updateChips([...this.state.chips, addedChip]);
      } else {
        this.props.middleware(addedChip)
          .then(chip => updateChips([...this.state.chips, chip]))
          .catch(err => this.setState({error: err.error, inputValue: ''}))
      }
    }
  }

  handleInputChange(e) {
    this.setState({inputValue: e.target.value, error: null});
  }

  render() {
    const renderChip = chip => <Chip  avatar={chip.avatar ? <Avatar src={chip.avatar}/> : null}
                                      style = {{marginBottom: 8, marginRight: 8}}
                                      label = {chip.label}
                                      onRequestDelete = {() => this.deleteChip(chip)}/>;

    return (
      <div>
        <TextField className = "chip-input"
                   fullWidth
                   label = "Member email"
                   marginForm
                   inputRef = {ref => this.inputRef = ref}
                   onChange = {this.handleInputChange}
                   value = {this.state.inputValue}
                   error={this.state.error}
                   helperText={this.state.error}>
        </TextField>

        <Margin height={8}/>

        <div className = "chips">
          {this.state.chips.map(chip => renderChip(chip))}
        </div>
      </div>
    );
  }
}

export default ChipsInput;

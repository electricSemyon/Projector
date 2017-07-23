import React, {Component} from 'react';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import UploadFile from '../file-upload/file-upload.component.jsx';
import Button from 'material-ui/Button';
import './new-project-popup.style.scss';

class NewProjectPopup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      opened: props.open,
      title: '',
      description: '',
      avatar: null
    }

    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleProjectCreation = this.handleProjectCreation.bind(this);
  }

  handleProjectImageUpload(image) {
    this.setState({avatar: image});
  }

  handleRequestClose() {
    this.props.requestClose();
  }

  handleProjectCreation(e) {
    e.preventDefault();

    const data = new FormData();

    data.append('title', this.state.title);
    data.append('description', this.state.description);

    if(this.state.avatar)
      data.append('icon', this.state.avatar);

    this.props.createProject(data);
  }

  render() {
    return (
      <Dialog open={this.props.open} className="new-project-popup" onRequestClose={this.handleRequestClose}>
        <DialogTitle>Create new project</DialogTitle>

        <DialogContent>
          <form onSubmit={this.handleProjectCreation}>
            <TextField id="project-title" fullWidth label="Project title" marginForm
                       onChange={(event, value) => this.setState({title: event.target.value})}/>
            <br/>

            <TextField id="project-description" label="Project description" multiline rows="2"
                       rowsMax="5" fullWidth marginForm/>
            <br/>

            <UploadFile accept="image/x-png, image/gif, image/jpeg"
                        buttonStyle={{style: { marginBottom: '10px'} }}
                        text="Upload project image"
                        handleUpload={avatar => this.handleProjectImageUpload(avatar)}/>
            <br/>

            <Button color="primary" raised type="submit">Create project</Button>
            <Button onClick={this.handleRequestClose}>Cancel</Button>
            <br/>
          </form>
        </DialogContent>
      </Dialog>
    );
  }
}

export default NewProjectPopup;

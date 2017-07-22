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
  }

  handleProjectImageUpload(image) {
    console.log(image)
  }

  handleRequestClose() {
    this.props.requestClose();
  }

  render() {
    return (
      <Dialog open={this.props.open} className="new-project-popup" onRequestClose={this.handleRequestClose}>
        <DialogTitle>Create new project</DialogTitle>

        <DialogContent >
          <TextField id="project-title" fullWidth label="Project title" marginForm/>
          <br/>
          <TextField id="project-description" label="Project description" multiline rows="2"
            rowsMax="5" fullWidth marginForm/>
          <br/>
          <UploadFile accept="image/x-png, image/gif, image/jpeg"
                      buttonStyle={{style: { marginBottom: '10px'} }}
                      text="Upload project image"
                      handleUpload={avatar => this.handleProjectImageUpload(avatar)}/>
          <br/>
          <Button color="primary" raised>Create project</Button>
          <Button>Cancel</Button>
          <br/>
          <DialogContentText>
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    );
  }
}

export default NewProjectPopup;

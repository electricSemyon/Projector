import React, {Component} from 'react';
import Button from 'material-ui/Button';

class UploadFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: ''
    }

    this.handleUpload = this.handleUpload.bind(this)
  }

  handleUpload(e) {
    const file = this.refs.file.files[0];
    const reader = new FileReader();
    const url = reader.readAsDataURL(file);

    reader.onloadend = (e) => this.setState({ imgSrc: [reader.result] });

    this.props.handleUpload(this.state.imgSrc);
  }

  render() {
    return (
      <div className="upload-file">
        <Button {...this.props.buttonStyle}
                onClick={() => this.refs.file.click()}>{this.props.text}</Button>
        <img ref="img" width="32" height="32" src={this.state.imgSrc} style={{marginLeft: '8px', verticalAlign: 'middle', borderRadius: '50%'}}/>
        <input
          ref="file"
          type="file"
          style={{"display" : "none"}}
          name="avatar"
          accept={this.props.accept}
          onChange={e => this.handleUpload(e)}/>
      </div>
    );
  }
}

export default UploadFile;

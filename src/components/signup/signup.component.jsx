import React from 'react';
import Header from '../header/header.component.jsx';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

import Input from '../input-field/validating-input.component.jsx';
import UploadFile from '../file-upload/file-upload.component.jsx';
import validate from '../../utils/validate';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', username: '', captchaToken: '', avatar: '' };
    this.handleSignup = this.handleSignup.bind(this);
    this.handleAvatarUpload = this.handleAvatarUpload.bind(this);
  }

  componentDidMount() {
    setTimeout(
      () => window.grecaptcha.render('google-captcha', {
        sitekey: '6LcVDiYUAAAAALi5IdQ-WPYfVd9afQJXvZsH8loU',
        callback: (res) => this.setState({ captchaToken: res })
      }), 300);
  }

  handleAvatarUpload(avatar) {
    console.log(avatar)
    this.setState({avatar: avatar});
  }

  handleSignup(e) {
    e.preventDefault();

    const data = new FormData();
    console.log(this.state.avatar)
    data.append('name', this.state.username);
    data.append('email', this.state.email);
    data.append('password', this.state.password);
    data.append('avatar', this.state.avatar);
    data.append('token', this.state.captchaToken)
    //console.log(data)
    this.props.signUp(data);
  }

  render() {
    return (
      <div>
        <Header></Header>
        <Grid container gutter={0} justify="center">
          <Grid className="ribbon" item xs={12} style={{'height': '100px', 'backgroundColor': '#5C6BC0', 'zIndex': -1}}></Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={4} style={{'padding': '20px', 'marginTop': '-50px'}}>
              <form onSubmit={this.handleSignup}>
                <Typography type="headline" component="h2"> SIGN UP </Typography>

                <Input label="Email" type="email" fullWidth={true}
                       handleChange={value => this.setState({email: value})}
                       validate={value => validate('email', value)}/>

                <Input label="Password" type="password" fullWidth={true}
                       handleChange={value => this.setState({password: value})}
                       validate={value => validate('password', value)}/>

                <UploadFile accept="image/x-png, image/gif, image/jpeg"
                            buttonStyle={{style: { marginBottom: '10px'} }}
                            text="Upload avatar"
                            handleUpload={avatar => this.handleAvatarUpload(avatar)}/>

                <div id="google-captcha"></div>

                <div className="login-buttons-container" style={{'textAlign': 'right'}}>
                  <Button type="submit" color="primary" raised style={{'marginTop': '16px'}}> SIGN UP </Button>
                </div>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Signup;

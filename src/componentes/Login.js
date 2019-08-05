import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import './css/App.css';
import { tsParenthesizedType, continueStatement } from '@babel/types';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state.islogin = "false";
    this.loginChange = this.loginChange.bind(this);
    this.state = {apellido: '',islogin:true};   
  }

  loginChange(e) {
    this.setState({islogin: false});
  }

  render() {
  return (
      <div>
      <Dialog open={this.state.islogin} >
        <Typography component="h1" variant="h5" align="left">
          Hello Chat
        </Typography>
          <div align="center">
            <TextField variant="standard" margin="normal" required id="user" label="User" name="user" autoFocus onChange={this.apellidoChange}>
            <TextField variant="standard" margin="normal" required id="password" label="Password" name="password" value={this.state.apellido}>
            <Button align='center' variant="normal" color="primary" onClick={this.loginChange}>
                Login
            </Button>
          </div>
      </Dialog>
      </div>
      );
  }
}


export default App;

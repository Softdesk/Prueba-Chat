import React from 'react';
import Paper from '@material-ui/core/Paper';
import './css/Header.css';

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
  return (
        <Paper elevation="none">
          CHATHELLO
        </Paper>
    );
  }
}

export default Header;

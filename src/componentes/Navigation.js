import React from 'react';
import Button from "@material-ui/core/Button";
import './css/Navegacion.css';
import { Paper } from '@material-ui/core';

class Navegacion extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
  return (
    <Paper>
    <div id="n">
      <Button size="small"> Control</Button>
      <Button size="small"> Profile</Button>
      <Button size="small" color="secondary">  Logout</Button>
    </div>
    </Paper>
   );
  }
}

export default Navegacion;

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import { FixedSizeList } from 'react-window';
import InputBase  from '@material-ui/core/InputBase';
import './css/Global.css';

  function Row(props) {
    const { index, style } = props;
  
    return (
      <ListItem button style={style} key={index}>
        <ListItemText primary={`Chat ${index + 1}`} />
      </ListItem>
    );
  }
 
class Contacto extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
   return (
    <div>
       <Paper >
      <InputBase placeholder="Search Contact or Group"/>     
        <FixedSizeList height={450} width={300}  itemSize={40} itemCount={5}>
         {Row}
        </FixedSizeList>
        </Paper>
    </div>
   );
  }
}

export default Contacto;

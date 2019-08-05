import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import './css/Global.css';
import Paper  from '@material-ui/core/Paper';
import Input  from '@material-ui/core/Input';
import InputBase  from '@material-ui/core/InputBase';

const root= {
  width: '100%',
  maxWidth: 360,
}

const mensajes =[
  {nombre:'Gustavo',mensaje:'Hola',hora:"15:20"},
  {nombre:'Ely',mensaje:'Hola',hora:"15:20"},
  {nombre:'Gustavo',mensaje:'Como Estas',hora:"15:20"}, 
]

const usuario="Gustavo"

class Conversacion extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
   return (
    <div>
     <Paper >
      <InputBase placeholder="Search Message"/>
        <div id="mensajes">
        <List className={root} maxWidth="450" fullWidth>
          {
           mensajes.map(mensaje => {
           return (
            <ListItem  alignItems='center' divider="true" ContainerComponent="code">
            <ListItemText className={root} primary={mensaje.nombre} 
                secondary={
                  <React.Fragment>
                    <Typography component="span" variant="body2" color="textPrimary">
                      {mensaje.hora} - {mensaje.mensaje}
                    </Typography>
                  </React.Fragment> } />
             </ListItem>
            )
          })
        }
        
        </List>
           </div>
           <Input id="new-message" placeholder="New Message" fullWidth/>
          
       </Paper>
      </div>
   );
  }
}

export default Conversacion;
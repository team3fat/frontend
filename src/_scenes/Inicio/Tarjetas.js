import React from 'react';
import '../../_assets/css/font.css';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

export default function Tarjetas() {
  return (
    <div>
      {TarjetaHistoria()}
    </div>
  );
}

function TarjetaHistoria() {
  return (
    <div>
      <List component="nav" aria-label="contacts">
        <ListItem button>
          <ListItemIcon>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/></svg>
          </ListItemIcon>
            <Typography id="historia" variant="h4" gutterBottom>
              Historia del Complejo
            </Typography>
        </ListItem>
        <ListItemText inset>
          <Typography gutterBottom variant="subtitle1">
            En 1945 se realizó el primer campamento en Diquecito, al comienzo se realizaban en carpas hasta que se adquirió la actual propiedad a la que constantemente se le han realizado mejoras y ampliaciones.
          </Typography>
        </ListItemText>
      </List>
    </div>
  )
}
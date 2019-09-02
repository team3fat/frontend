import React from 'react';
import Botones from '../Inicio/Botones.js';
import Tarjeta from '../Inicio/Tarjetas.js';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

 const useStyles = makeStyles(theme => ({
   paper: {
     margin: "50px"
   },

   input: {
     display: 'none',
   },
}));

function TraerButtonAppBar() {
  const classes = useStyles();
  return (
    <div>
        <Grid>
          <Botones />
        </Grid>
        <Grid className= {classes.paper}>
          <Tarjeta />
        </Grid>
    </div>
  );
}

export default TraerButtonAppBar;
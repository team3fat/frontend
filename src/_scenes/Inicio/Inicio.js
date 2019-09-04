import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Botones from '../Inicio/Botones.js';
import Tarjetas from '../Inicio/Tarjetas.js';

const useStyles = makeStyles(theme => ({
  paper: {
    margin: "10px",
    padding: theme.spacing(2),
  },
}));

export default function TraerInicio() {
  const classes = useStyles();

  return (
    <div>
        <Paper className={classes.paper} ><Botones /></Paper>
        <Paper className={classes.paper}><Tarjetas /></Paper>
    </div>
  );
}
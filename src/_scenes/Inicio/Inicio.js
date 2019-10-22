import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Botones from '../Inicio/Botones.js';
import Tarjetas from '../Inicio/Tarjetas.js';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: "40px",
  },
  paper: {
    marginInline: "50px",
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="center" spacing={5}>
        <Grid item xs={8}>
          <Paper className={classes.paper} square={true}><Botones /></Paper>
        </Grid>
      <Grid
        container
        direction="column"
        justify="space-around"
        alignItems="stretch">
        <Paper className={classes.paper} square={true}><Tarjetas /></Paper>
      </Grid>
      </Grid>
    </div>
  );
}

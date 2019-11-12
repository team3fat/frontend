import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Ubicacion from './Ubicacion';
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },   
}));

function servicio() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid
            container
            direction="column"
            justify="center"
            alignItems="center">
              <Ubicacion />
              </Grid>
        </div>
    );
}

export default servicio;
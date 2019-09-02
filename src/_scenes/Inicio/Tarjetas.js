import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import '../../_assets/css/font.css';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    paper: {
      margin: "50px"
    },

    input: {
      display: 'none',
    },
  }));

export default function Tarjetas() {
    const classes = useStyles();

    return (
        <div>
            <Paper className= {classes.paper}>
                {TarjetaFotos()}
            </Paper>
            <Paper>
                {TarjetaHistoria()}
            </Paper>
            <Paper>
                {TarjetaDetalles()}
            </Paper>
        </div>
    );
}

function TarjetaFotos(){
    return(
        <Grid>
            <Typography variant="h4" gutterBottom>
                Fotos
            </Typography>
            <Typography gutterBottom variant="subtitle1">
                dcvrd
            </Typography>
        </Grid>
    )
}

function TarjetaHistoria(){
    return(
        <Grid>
            <Typography variant="h4" gutterBottom>
                Historia
            </Typography>
            <Typography gutterBottom variant="subtitle1">
                dcvrd
            </Typography>
        </Grid>
    )
}

function TarjetaDetalles(){
    return(
        <Grid>
            <Typography variant="h4" gutterBottom>
                Detalles
            </Typography>
            <Typography gutterBottom variant="subtitle1">
                dcvrd
            </Typography>
        </Grid>
    )
}
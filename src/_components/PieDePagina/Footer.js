import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import '../../_assets/css/font.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    background: '#3f51b5',
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} square={true}>
      <Grid container spacing={1}>
        <Grid item xs={7}>
          <h5 className="colortext MuiTypography-root makeStyles-title-3 MuiTypography-h6" >El Diquecito Grupo 3</h5>
                  <p className="colortext MuiTypography-root makeStyles-title-3 MuiTypography-h6">Mas información del complejo</p>
                  <p className="colortext MuiTypography-root makeStyles-title-3 MuiTypography-h6">Acá</p> 
                  
        </Grid>
        <Grid item xs={5}>
          <h5 className="colortext MuiTypography-root makeStyles-title-3 MuiTypography-h6">Links</h5>
                  <li className="colortext MuiTypography-root makeStyles-title-3 MuiTypography-h6"><a href="https://es-la.facebook.com/diquecito.nuevocomplejo/">Facebook</a></li>
                  <li className="colortext MuiTypography-root makeStyles-title-3 MuiTypography-h6"><a href="https://www.instagram.com/explore/locations/1001217278/nuevo-complejo-diquecito">Instagram</a></li>
              
        </Grid>
      </Grid>
      </Paper>
    </div>
  );
}
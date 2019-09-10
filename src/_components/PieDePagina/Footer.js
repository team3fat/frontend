import '../../_assets/css/style.css';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import Typography from '@material-ui/core/Typography';


const message = `Somos un complejo con valores cristianos, amantes del mundo, y queremos que las demas personas puedan disfrutar de la naturaleza, liberar sus cargas, sus preocupaciones y que puedan relajarse.
                Esperamos que disfruten su estadia en el Nuevo Complejo Diquecito.`;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    background: '#3949ab',
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} square={true}>
      <Grid wrap="nowrap" container spacing={1}>
        <Grid item xs={7}>
          <h5 className="colortext MuiTypography-root makeStyles-title-3 MuiTypography-h6" >Nuevo Complejo Diquecito</h5>
          <Typography className="colortext">{message}</Typography>
        </Grid>
        <Grid item xs={5}>
          <h5 className="colortext MuiTypography-root makeStyles-title-3 MuiTypography-h6">Links</h5>
                  <li className="colortext MuiTypography-root makeStyles-title-3 MuiTypography-h6"><a className="colortext" href="https://es-la.facebook.com/diquecito.nuevocomplejo/">Facebook</a></li>
                  <li className="colortext MuiTypography-root makeStyles-title-3 MuiTypography-h6"><a className="colortext" href="https://www.instagram.com/explore/locations/1001217278/nuevo-complejo-diquecito">Instagram</a></li>
        </Grid>
      </Grid>
      </Paper>
    </div>
  );
}

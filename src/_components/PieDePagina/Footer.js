import '../../_assets/css/style.css';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    background: '#3949ab',
  },
  img: {
  margin: 'auto',
  display: 'block',
  maxWidth: '50%',
  maxHeight: '20%',
  },
  separar:{
    margin: theme.spacing(2),
  },
  imgredes:{
    width: '50px',
    height:'50px',
  }
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} square={true}>
      <Grid wrap="nowrap" container spacing={1}>
        <Grid item xs={4}>
          <Grid className={classes.img}>
            <img className={classes.img} alt="" src={require("../../_assets/Img/LogoDique.png")}/>
          </Grid>
          </Grid>
        <Grid item xs={3}>
          <h5 className="colortext MuiTypography-root makeStyles-title-3 MuiTypography-h6" >Para mas informacion comunicarse con:</h5>
          <Typography className="colortext">Dámaris Conte 3513302070</Typography>
        </Grid>
        <Grid item xs={5}>
          <h5 className="colortext MuiTypography-root makeStyles-title-3 MuiTypography-h6">Visita Nuestras Redes</h5>
          <a className={classes.separar} href="https://es-la.facebook.com/diquecito.nuevocomplejo/" target="_blank">
            <img className={classes.imgredes} alt="" src={require("../../_assets/Img/LogoFb.png")}/>
          </a>
          <a className={classes.separar} href="https://www.instagram.com/explore/locations/1001217278/nuevo-complejo-diquecito" target="_blank">
            <img className={classes.imgredes} alt="" src={require("../../_assets/Img/LogoIg.png")}/>
          </a>
        </Grid>
      </Grid>
      </Paper>
    </div>
  );
}

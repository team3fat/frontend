import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import '../../_assets/css/font.css';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const messageSalon = 'Este es el inicio de nuestra pagina, encentra un poco de como comenzó el complejo y sigue conociendo nuestra si es de tu interez, puedes ver fotos y actividades';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    marginLeft: "50px",
    marginRight: "50px",  
  },
  title: {
    padding: theme.spacing(0),
    textAlign: 'center',
    minHeight: '35px',
    minWidth: "280px",
    marginBottom: "25px",
    marginTop: "10px",
    background: '#3949ab',
  },  
  img: {
    display: 'block',
    maxWidth: '610px',
    maxHeight: '403px',
  },
  card: {
    Width: "1210px",
  },
  end: {
    minWidth: "1210px",
    marginBottom: "50px",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles()
  return (
      <div>
        <Paper>
          <Grid container
            className={classes.button}
            direction="row"
            justify="space-between"
            alignItems="center">
              <Grid container
              direction="row"
              justify="center"
              alignItems="center">
                <Grid container
                direction="row"
                justify="center"
                alignItems="center">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" /></svg>
                </Grid>
                <Paper className={classes.title} square={true}>
                  <h5 className="colortext MuiTypography-root makeStyles-title-3 MuiTypography-h6" >Historia</h5>
                </Paper>
                <Grid container
                direction="row"
                justify="center"
                alignItems="center">
                  <Typography id="historia" variant="h6" gutterBottom>
                    {messageSalon}
                  </Typography>
                </Grid>
              </Grid>   
          </Grid>
        </Paper>
      </div>
  );
}
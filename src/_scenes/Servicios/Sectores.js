import '../../_assets/css/style.css';
//import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import Typography from '@material-ui/core/Typography';


const messageSalon = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

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

export default function informacion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container
                direction="row"
                justify="center"
                alignItems="center">
        <Paper className={classes.title} square={true}>
        <h5 className="colortext MuiTypography-root makeStyles-title-3 MuiTypography-h6" >Sectores</h5>
         </Paper>
        </Grid>
      <Paper className={classes.paper} square={true}>
        <Grid className={classes.card}container
                direction="row"
                justify="center"
                alignItems="center">
            <Grid item xs={6}>
            <img className={classes.img} alt={"complex"} src={require("../../_assets/Img/Salon.jpg")}/>
            </Grid>
            <Grid item xs={6}>
            <h5 className="colortext2 MuiTypography-root makeStyles-title-3 MuiTypography-h6">Salon De Uso Multiple</h5>
            <Typography className="colortext2">{messageSalon}</Typography> 
            </Grid>
      </Grid>
      </Paper>
        <Paper className={classes.paper} square={true}>
          <Grid className={classes.card} container
              direction="row"
              justify="center"
              alignItems="center">
          <Grid item xs={6}>
            <h5 className="colortext2 MuiTypography-root makeStyles-title-3 MuiTypography-h6">Canchas</h5>
             <Typography className="colortext2">{messageSalon}</Typography> 
          </Grid>
            <Grid item xs={6}>
            <img className={classes.img} alt={"complex"} src={require("../../_assets/Img/Canchas.jpg")}/>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper} square={true}>
        <Grid className={classes.card}container
                direction="row"
                justify="center"
                alignItems="center">
            <Grid item xs={6}>
            <img className={classes.img} alt={"complex"} src={require("../../_assets/Img/Pileta.jpg")}/>
            </Grid>
            <Grid item xs={6}>
            <h5 className="colortext2 MuiTypography-root makeStyles-title-3 MuiTypography-h6">Pileta</h5>
            <Typography className="colortext2">{messageSalon}</Typography> 
            </Grid>
      </Grid>
      </Paper>
        <Paper className={classes.paper} square={true}>
          <Grid className={classes.card} container
              direction="row"
              justify="center"
              alignItems="center">
          <Grid item xs={6}>
            <h5 className="colortext2 MuiTypography-root makeStyles-title-3 MuiTypography-h6">Habitaciones</h5>
             <Typography className="colortext2">{messageSalon}</Typography> 
          </Grid>
            <Grid item xs={6}>
            <img className={classes.img} alt={"complex"} src={require("../../_assets/Img/Habitaciones.jpg")}/>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper} square={true}>
        <Grid className={classes.card}container
                direction="row"
                justify="center"
                alignItems="center">
            <Grid item xs={6}>
            <img className={classes.img} alt={"complex"} src={require("../../_assets/Img/Cocina.jpg")}/>
            </Grid>
            <Grid item xs={6}>
            <h5 className="colortext2 MuiTypography-root makeStyles-title-3 MuiTypography-h6">Cocina</h5>
            <Typography className="colortext2">{messageSalon}</Typography> 
            </Grid>
      </Grid>
      </Paper>
        <Paper className={classes.paper} square={true}>
          <Grid className={classes.card} container
              direction="row"
              justify="center"
              alignItems="center">
          <Grid item xs={6}>
            <h5 className="colortext2 MuiTypography-root makeStyles-title-3 MuiTypography-h6">Cabañas</h5>
             <Typography className="colortext2">{messageSalon}</Typography> 
          </Grid>
            <Grid item xs={6}>
            <img className={classes.img} alt={"complex"} src={require("../../_assets/Img/Cabana.jpg")}/>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper} square={true}>
        <Grid className={classes.end} container
                direction="row"
                justify="center"
                alignItems="center">
            <Grid item xs={6}>
            <img className={classes.img} alt={"complex"} src={require("../../_assets/Img/Banos.jpg")}/>
            </Grid>
            <Grid item xs={6}>
            <h5 className="colortext2 MuiTypography-root makeStyles-title-3 MuiTypography-h6">Baños</h5>
            <Typography className="colortext2">{messageSalon}</Typography> 
            </Grid>
      </Grid>
      </Paper>
    </div>
  );
}
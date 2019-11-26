import '../../_assets/css/style.css';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import Typography from '@material-ui/core/Typography';

const infoSUM = `Salón de usos múltiples (SUM) como comedor y lugar de reunión y recreación: 120 personas. Uso de salón multiuso con micrófonos, sonido e instrumentos amplificados: de 10 a 13 y de 16 a 23hs. Sin sonido se puede usar el salón en cualquier horario`;
const infoBaños = `Disponibilidad de baños 3 baños de varones con 3 duchas, 3 baños de mujeres con 3 duchas, 8 baños con duchas dentro de habitaciones, 2 baños con ducha en cabañas`;
//const infoCochera = `Sector cochera y expansión salón: 50 personas`;
const infoCocina = `Sector de cocina: 5-8 personas`;
//const infoAsado = `sector asador: 2-4 personas`;
const infoHabitaciones = `Sector de habitaciones: 120 personas`;
const infoCancha = `Sector de canchas: 120 personas. ​Uso de canchas: de 10 a 13 y de 16 a 20hs`;
const infoPileta = `Sector de pileta: 80 personas. Uso de pileta: de 10 a 20hs`;
const infoCabaña = ` Sector cabañas: 9 personas`;
//const infoFogon = `sector fogón: 50 personas`;

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
    marginTop: "25px",
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
    <div>
      <Grid container
      className={classes.button}
      direction="row"
      justify="space-between"
      alignItems="center">
        <Grid container
        direction="row"
        justify="center"
        alignItems="center">
          <Paper className={classes.title} square={true}>
            <h5 className="colortext MuiTypography-root makeStyles-title-3 MuiTypography-h6" >Sectores</h5>
          </Paper>
          </Grid>   
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
            <Typography className="colortext2">{infoSUM}</Typography> 
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
             <Typography className="colortext2">{infoCancha}</Typography> 
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
            <Typography className="colortext2">{infoPileta}</Typography> 
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
             <Typography className="colortext2">{infoHabitaciones}</Typography> 
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
            <Typography className="colortext2">{infoCocina}</Typography> 
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
             <Typography className="colortext2">{infoCabaña}</Typography> 
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
            <Typography className="colortext2">{infoBaños}</Typography> 
            </Grid>
      </Grid>
      </Paper>
    </div>
  );
}
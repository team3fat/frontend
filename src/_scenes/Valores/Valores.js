import React from 'react';
import '../../_assets/css/font.css';
import '../../_assets/css/style.css';
import { black } from 'material-ui/styles/colors';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
/*
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
*/
import ButtonBase from '@material-ui/core/ButtonBase';

const message = `Somos un complejo con valores cristianos, amantes del mundo.`;

const message1 = `Queremos que las demas personas puedan disfrutar de la naturaleza, liberar sus cargas, sus preocupaciones y que puedan relajarse.
                Esperamos que disfruten su estadia en el Nuevo Complejo Diquecito.`;

const message2 = `Esperamos que disfruten su estadia en el Nuevo Complejo Diquecito.`;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    margin: "50px",
  },

  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  divider: {
    margin: theme.spacing(2, 0),
    color: black,
  },
  card: {
    minWidth: "1240px",
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
}));

export default function Tarjetas() {
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
            <h5 className="colortext MuiTypography-root makeStyles-title-3 MuiTypography-h6" >Nuestros Valores</h5>
          </Paper>
          </Grid>   
      </Grid>
      <Paper className={classes.paper} square={true}>
        <Grid container spacing={4} className={classes.card}>
          <Grid item xs={7}>
            <Grid direction="column"
            justify="center"
            alignItems="stretch"
            item>
              {Mision()}
            </Grid>
          </Grid>
          <Grid item xs={4}>
          {ImagenLoca()}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

///

function Mision() {
  const classes = useStyles();

  return (
    <div>
          <h5 className="colortext2 MuiTypography-root makeStyles-title-3 MuiTypography-h6">¿Quienes Somos?</h5>
          <Typography className="colortext2">{message}</Typography>    
          <Divider className={classes.divider} />
          <h5 className="colortext2 MuiTypography-root makeStyles-title-3 MuiTypography-h6">¿Que queremos?</h5>
          <Typography className="colortext2">{message1}</Typography>
          <Divider className={classes.divider} />
          <h5 className="colortext2 MuiTypography-root makeStyles-title-3 MuiTypography-h6">Nuestra Mision</h5>
          <Typography className="colortext2">{message2}</Typography> 
    </div>
  )
}

///

function ImagenLoca() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.paper} square={true}>
        <Grid container spacing={0}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt={"complex"} src={require("../../_assets/Img/Mision_Valores.jpg")}/>
            </ButtonBase>
          </Grid>
          <Grid item xs={4} sm container>
            <Grid item xs container direction={"column"} spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant={"subtitle1"}>
                  Somos cristianos
                </Typography>
                  </Grid>
                  <Grid item>
                  </Grid>
                </Grid>
                <Grid item>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
    </div>
  )
}
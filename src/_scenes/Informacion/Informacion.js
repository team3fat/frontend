import '../../_assets/css/style.css';
import { black } from 'material-ui/styles/colors';
import ButtonBase from '@material-ui/core/ButtonBase';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Typography from '@material-ui/core/Typography';


const message1 = `El Complejo se encuentra en Diquecito, pasando La Calera yendo desde Córdoba, el mismo tiene un ingreso desde la ruta, donde viniendo desde Córdoba, se tiene que pasar La Calera en dirección hacia El Dique San Roque, en esa dirección se puede encontrar la entrada al kilómetro 13,5 del lado izquierdo, antes de ver la entrada al Complejo, habrá una bajada donde se puede visualizar el pequeño dique al lado derecho acompañado de un puente metálico, al lado de la entrada también se puede ver una casilla blanca para esperar colectivos. Si se quiere ingresar al complejo del lado del dique San Roque es en la entrada siguiente a la Clínica Diquecito del lado derecho después de la casilla blanca. Luego de entrar por el camino, el Complejo estará a la mano derecha donde por la entrada se podrán ver las canchas, salón y la rampa de entrada.`;

const message2 = `Para ir en colectivo, la línea que lleva hacia el Complejo es La Calera. Los colectivos que llevan hacia el mismo son los que se dirigen a Cosquín o La Falda exeptuando los que van por Variante Costa Azul, al subirse al colectivo decir que se dirijen a la vieja parada de la clinica Diquecito, si quieren estar seguros de bajarse en el lugar correcto, pidanles al chofer del colectivo que les avise cuando esten en la parada para bajarse. La parada a bajarse esta despues de una bajada donde se puede visualizar un pequeño dique al lado derecho acompañado de un puente metálico, y si se viene desde el lado del Dique San Roque, la parada a bajarse es la siguiente a la Clinica Diquecito. Despues de bajarse adentrarse en el camino de tierra y el campamento estara de lado derecho.`

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
  }
}));

export default function Informacion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} square={true}>
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <h5 className="colortext2 MuiTypography-root makeStyles-title-3 MuiTypography-h6">Mapas</h5>
               <Paper className={classes.paper} square={true}>
            <Grid container spacing={0}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img className={classes.img} alt={"complex"} src={require("../../_assets/Img/Map.jpg")}/>
                </ButtonBase>
              </Grid>
              <Grid item xs={4} sm container>
                <Grid item xs container direction={"column"} spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant={"subtitle1"}>
                      Nuevo Complejo Diquecito
                    </Typography>
                    <Typography variant={"body2"} gutterBottom>
                      <a href="https://www.google.com/maps/place/Nuevo+Complejo+Diquecito+(campamento+evangelico)/@-31.3589483,-64.3826017,149a,35y,181.59h,44.73t/data=!3m1!1e3!4m5!3m4!1s0x9432a2891aac0737:0x55e26374f614987c!8m2!3d-31.3606491!4d-64.3822378?hl=es"target="_blank">Google Maps</a>
                    </Typography>
                    <Typography variant={"body2"} color={"textSecondary"}>
                     <a href="https://www.google.com/maps/dir//-31.3607839,-64.383071/@-31.3591681,-64.3814152,1414m/data=!3m1!1e3!4m2!4m1!3e2?hl=es"target="_blank">Como Llegar</a>
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
        </Grid>
        <Grid item xs={7}>
              <Grid direction="column"
            justify="center"
            alignItems="stretch"
            item>
          <h5 className="colortext2 MuiTypography-root makeStyles-title-3 MuiTypography-h6">Donde Queda?</h5>
          <Typography className="colortext2">{message1}</Typography>
          <Divider className={classes.divider} />
          <h5 className="colortext2 MuiTypography-root makeStyles-title-3 MuiTypography-h6">Colectivos</h5>
          <Typography className="colortext2">{message2}</Typography>
          </Grid>
        </Grid>
      </Grid>
      </Paper>
    </div>
  );
}

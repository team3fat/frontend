import React from 'react';
import '../../_assets/css/font.css';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    margin: "50px",
  },
  title: {
    padding: theme.spacing(0),
    textAlign: 'center',
    minHeight: '35px',
    minWidth: "280px",
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
            <h5 className="colortext MuiTypography-root makeStyles-title-3 MuiTypography-h6" >Conocenos un poco!!</h5>
          </Paper>
          </Grid>   
      </Grid>
      <Paper className={classes.paper} square={true}>
      {TarjetaHistoria()}
      {TarjetaDetalles()}
      </Paper>
    </div>
  );
}

function TarjetaHistoria() {
  return (
    <div>
      <List component="nav" aria-label="contacts">
        <ListItem button>
          <ListItemIcon>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/></svg>
          </ListItemIcon>
            <Typography id="historia" variant="h4" gutterBottom>
              Historia del Complejo
            </Typography>
        </ListItem>
        <ListItemText inset>
          <Typography gutterBottom variant="subtitle1">
          En 1945 se realizó el primer campamento en Diquecito, al comienzo se realizaban en carpas hasta que se adquirió la actual propiedad a la que constantemente se le han realizado mejoras y ampliaciones. 
          </Typography>
        </ListItemText>
      </List>
    </div>
  )
}

function TarjetaDetalles() {
  return (
    <div>
      <List component="nav" aria-label="contacts">
        <ListItem button>
          <ListItemIcon>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M3 9h4V5H5c-1.1 0-2 .9-2 2v2zm0 5h4v-4H3v4zm5 0h4v-4H8v4zm5 0h4v-4h-4v4zM8 9h4V5H8v4zm5-4v4h4V5h-4zm5 9h4v-4h-4v4zM5 19h2v-4H3v2c0 1.1.9 2 2 2zm3 0h4v-4H8v4zm5 0h4v-4h-4v4zm5 0h2c1.1 0 2-.9 2-2v-2h-4v4zm0-14v4h4V7c0-1.1-.9-2-2-2h-2z" /></svg>
          </ListItemIcon>
            <Typography variant="h4" gutterBottom id="detalles">
              Detalles
            </Typography>
        </ListItem>
        <ListItem>
          <ListItemText inset>
            <Typography variant="h5" gutterBottom>
                Actividades que se pueden realizar en el complejo (Caminatas, Juegos, etc.)
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItemText inset>
          <Typography gutterBottom variant="subtitle1">
            Dentro del predio: voley, basquet, futbol, metegol, pileta
            Fuera del predio: caminata corta a las viejas canteras, caminata al río, caminata por las vías del tren, excursión a una cascada
          </Typography>
        </ListItemText>
        <ListItem>
          <ListItemText inset>
            <Typography variant="h5" gutterBottom>
                Capacidad de cada sector (Cantidad de personas)
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItemText inset>
          <Typography gutterBottom variant="subtitle1">
            Salón de usos múltiples (SUM) como comedor y lugar de reunión y recreación: 120 personas, sector cochera y expansión salón: 
            50 personas, sector de cocina: 5-8 personas, sector asador: 2-4 personas, sector de habitaciones: 120 personas, sector de canchas: 
            120 personas, sector de pileta: 80 personas, sector cabañas: 9 personas, sector fogón: 50 personas, sector casa cuidador: 3 personas.          </Typography>
        </ListItemText>



        <ListItem>
          <ListItemText inset>
            <Typography variant="h5" gutterBottom>
                Algunos elementos incluye la reserva del complejo
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItemText inset>
          <Typography gutterBottom variant="subtitle1">
            ​Incluye elementos de cocina, vajilla completa, sillas.<h4> ​NO INCLUYE:</h4> Proyector, pantalla, sonido, instrumentos, pelotas, sábanas, toallón y elementos de higiene
          </Typography>
        </ListItemText>
        <ListItem>
          <ListItemText inset>
            <Typography variant="h5" gutterBottom>
              Cocina y comidas
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItemText inset>
          <Typography gutterBottom variant="subtitle1">
            El servicio que incluye comidas abarca desayuno, almuerzo, merienda y cena. A modo orientativo, el desayuno y merienda  incluyen café con leche o mate cocido y criollos con manteca y dulce de leche. Los almuerzos y cenas pueden ser, pastel de papas y ensalada, spaghettis con salsa bolognesa, arroz con pollo, pata flambeada, ravioles con salsa, etc, acompañados con jugo de primera calidad y postre tipo flan, gelatina o fruta.
            La cocina cuenta con ollas de diferentes tamaños, placas de horno, pavas, sartenes, jarras, paneras, platos, vasos, tazas, cubiertos, etc.
            Hay una cocina de 6 hornallas y horno y un horno pizzero, heladera con freezer, una heladera grande y dos freezers, tres bachas y una mesa grande de trabajo.
          </Typography>
        </ListItemText>
      </List>
    </div>
  )
}
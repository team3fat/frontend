import '../../_assets/css/style.css';
import * as React from "react";
import { Gallery, GalleryImage } from "react-gesture-gallery";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper2: {
    padding: theme.spacing(0),
    margin: "50px",
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    marginLeft: "50px",
    marginRight: "50px",  
  },
  title: {
    padding: theme.spacing(1),
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
            <h5 className="colortext MuiTypography-root makeStyles-title-3 MuiTypography-h6" >Puedes ver alguna fotos de nuestro complejo</h5>
          </Paper>
          </Grid>   
      </Grid>
      <Paper className={classes.paper2} square={true}>
      {Example()}
      </Paper>
    </div>
  );
}


function Example() {

  const classes = useStyles();

  const [index, setIndex] = React.useState(0);

  const images = [
    {
        src: require("../../_assets/Img/Salon.jpg")
    },
    {
        src: require("../../_assets/Img/Pileta.jpg")
    },
    {
        src: require("../../_assets/Img/Canchas.jpg")
    },
    {
        src: require("../../_assets/Img/Habitaciones.jpg")
    },
    {
        src: require( "../../_assets/Img/Banos.jpg")
    },
  ];
 
   React.useEffect(() => {
    const timer = setInterval(() => {
      if (index === 4) {
        setIndex(0);
      } else {
        setIndex(prev => prev + 1);
      }
    }, 3000);
    return () => clearInterval(timer);
    }, [index]);

  return (
    <Paper className={classes.paper} square={true}>
      <div style={{ background: "black", width: "auto", height: "auto" }}>
        <Gallery
          index={index}
          onRequestChange={i => {
          setIndex(i);
        }}
        >
        {images.map(img => (
        <GalleryImage objectFit="contain" key={img.src} src={img.src} />
          ))}
        </Gallery>
      </div>
    </Paper> 
  );
}


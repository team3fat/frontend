import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
const message1 = `El Complejo se encuentra en Diquecito, pasando La Calera yendo desde Córdoba, el mismo tiene un ingreso desde la ruta, donde viniendo desde Córdoba, se tiene que pasar La Calera en dirección hacia El Dique San Roque, en esa dirección se puede encontrar la entrada al kilómetro 13,5 del lado izquierdo, antes de ver la entrada al Complejo, habrá una bajada donde se puede visualizar el pequeño dique al lado derecho acompañado de un puente metálico, al lado de la entrada también se puede ver una casilla blanca para esperar colectivos. Si se quiere ingresar al complejo del lado del dique San Roque es en la entrada siguiente a la Clínica Diquecito del lado derecho después de la casilla blanca. Luego de entrar por el camino, el Complejo estará a la mano derecha donde por la entrada se podrán ver las canchas, salón y la rampa de entrada.`;
const message2 = `Para ir en colectivo, la línea que lleva hacia el Complejo es La Calera. Los colectivos que llevan hacia el mismo son los que se dirigen a Cosquín o La Falda exeptuando los que van por Variante Costa Azul, al subirse al colectivo decir que se dirijen a la vieja parada de la clinica Diquecito, si quieren estar seguros de bajarse en el lugar correcto, pidanles al chofer del colectivo que les avise cuando esten en la parada para bajarse. La parada a bajarse esta despues de una bajada donde se puede visualizar un pequeño dique al lado derecho acompañado de un puente metálico, y si se viene desde el lado del Dique San Roque, la parada a bajarse es la siguiente a la Clinica Diquecito. Despues de bajarse adentrarse en el camino de tierra y el campamento estara de lado derecho.`
import Ubicacion from './Ubicacion.js';
import Sectores from './Sectores.js';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },   
}));

function Informacion() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid
            container
            direction="column"
            justify="center"
            alignItems="center">
              <Ubicacion />   
              <Sectores />
              </Grid>
        </div>
    );
}

export default Informacion;
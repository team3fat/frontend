import './_assets/css/style.css';
import AppBar from '@material-ui/core/AppBar';
import AppRoutes from './routes.js';
import Button from '@material-ui/core/Button';
import { BrowserRouter } from 'react-router-dom';
import Footer from './_components/PieDePagina/Footer.js';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './_components/nav-bar/nav-bar.js';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function App() {
    const classes = useStyles();

    return (
        <div className="fondo img">
            <Grid
            container
            direction="column"
            justify="center"
            alignItems="center">
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Campamento Diquecito
                    </Typography>
                    <Button color="inherit" href="/registro">Registrate</Button>
                    <Button color="inherit" href="/ingreso">Iniciar Sesion</Button>
                </Toolbar>
            </AppBar>
            <BrowserRouter>
                <div className="main">
                    <section className="main--section">
                        <NavBar />
                        <AppRoutes />
                    </section>
                </div>
            </BrowserRouter>
            <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-end">
            <Footer/>
            </Grid>
            </Grid>
        </div>
    );
}

export default App;
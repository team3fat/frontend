import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './_components/nav-bar/nav-bar.js';
import AppRoutes from './routes.js';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Campamento Diquecito
                    </Typography>
                    <Button color="inherit">Registrate</Button>
                    <Button color="inherit">Iniciar Sesion</Button>
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
        </div>
    );
}

export default App;
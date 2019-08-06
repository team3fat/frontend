import Home from './_scenes/Home/Home';
import Informacion from './_scenes/Informacion/Informacion';
import Reservas from './_scenes/Reservas/Reservas';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

const AppRoutes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/info" component={Informacion}/>
        <Route exact path="/reservas" component={Reservas}/>
    </Switch>
);

export default AppRoutes;
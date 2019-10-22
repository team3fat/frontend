import Inicio from './_scenes/Inicio/Inicio';
import Informacion from './_scenes/Informacion/Informacion';
import Reservas from './_scenes/Reservas/Reservas';
import Ingreso from './_scenes/Ingreso/Ingreso';
import Registro from './_scenes/Registro/Registro';
import ConfirmacionReserva from './_scenes/ConfirmacionReserva/ConfirmacionReserva'
import React from 'react';
import { Route, Switch } from 'react-router-dom';

const AppRoutes = () => (
    <Switch>
        <Route exact path="/inicio" component={Inicio} />
        <Route exact path="/info" component={Informacion}/>
        <Route exact path="/reservas" component={Reservas}/>
        <Route exact path="/ingreso"  component={Ingreso}/>
        <Route exact path="/registro" component={Registro}/>
        <Route exact path="/confirmacion" component={ConfirmacionReserva}/>
    </Switch>
);

export default AppRoutes;
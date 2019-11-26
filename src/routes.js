import Valores from './_scenes/Valores/Valores';
import Servicios from './_scenes/Servicios/Servicios';
import Reservas from './_scenes/Reservas/Reservas';
import Ingreso from './_scenes/Ingreso/Ingreso';
import Ubicacion from './_scenes/Ubicacion/MostrarUbicacion';
import Detalles from './_scenes/Infraestructura/Detalles';
import Registro from './_scenes/Registro/Registro';
import ConfirmacionReserva from './_scenes/ConfirmacionReserva/ConfirmacionReserva'
import Miranos from './_scenes/Miranos/Carrusel';

import React from 'react';
import { Route, Switch } from 'react-router-dom';

const AppRoutes = () => (
    <Switch>
        <Route exact path="/vision-mision-y-valores" component={Valores}/>
        <Route exact path="/servicios" component={Servicios}/>
        <Route exact path="/miranos" component={Miranos}/>
        <Route exact path="/reservas" component={Reservas}/>
        <Route exact path="/ubicacion" component={Ubicacion}/>
        <Route exact path="/detalles" component={Detalles}/>
        <Route exact path="/ingreso"  component={Ingreso}/>
        <Route exact path="/registro" component={Registro}/>
        <Route exact path="/confirmacion" component={ConfirmacionReserva}/>
    </Switch>
);

export default AppRoutes;
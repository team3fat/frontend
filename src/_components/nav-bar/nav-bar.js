import React from 'react';
import { NavLink } from 'react-router-dom'; 

class NavBar extends React.Component {
    render() {
        return (
            <nav>
                <NavLink {...this.getNavLinkProps('inicio')}>Inicio</NavLink>
                <NavLink {...this.getNavLinkProps('informacion')}>Informacion</NavLink>
                <NavLink {...this.getNavLinkProps('reservas')}>Reservas</NavLink>
            </nav>
        
        );
    }

    getNavLinkProps(specificProp){
        var props = {
            inicio: {
                exact: true,
                to: '/'
            },
            informacion: {
                to: '/info'
            },
            reservas: {
                to: '/reservas'
            }
        };

        return props[specificProp];
    }
}

export default NavBar;
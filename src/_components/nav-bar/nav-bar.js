import React from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        return (
            <nav>
                <NavLink {...this.getNavLinkProps('inicio')}>Inicio</NavLink>
                <NavLink {...this.getNavLinkProps('info')}>Informacion</NavLink>
                <NavLink {...this.getNavLinkProps('reservas')}>Reservas</NavLink>
            </nav>
        )
    }

    getNavLinkProps(specificProp){
        var props = {
            inicio: {
                to: '/'
            },
            Informacion: {
                to: '/info'
            },
            reservas: {
                to: '/reservas'
            }
        }

        return props[specificProp]
    }
}

export default NavBar;
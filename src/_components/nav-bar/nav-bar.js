import React from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <nav>
                <NavLink >Inicio</NavLink>
                <NavLink >Informacion</NavLink>
                <NavLink >Reservas</NavLink>
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
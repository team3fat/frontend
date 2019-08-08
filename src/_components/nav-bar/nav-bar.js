import React from 'react';
import { NavLink } from 'react-router-dom'; 

class NavBar extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            diaShow: false
        }
    }

    diaChanged() {
        this.setState({
            diaShow: true
        })
        
    }

    componentWillMount() {
       // window.addEventListener('DiaChanged', this.diaChanged.bind(this))
    };

    componentWillUnmount() {
        //window.removeEventListener('DiaChanged')
    }

    render() {
        return (
            <nav>
                <div>
                    <NavLink {...this.getNavLinkProps('inicio')}>Inicio</NavLink>
                </div>
                <div>
                    <NavLink {...this.getNavLinkProps('informacion')}>Informacion</NavLink>
                </div>
                <div>
                    <NavLink {...this.getNavLinkProps('reservas')}>Reservas</NavLink>
                </div>
                { this.state.diaShow ? "dia" : null}
            </nav>

        );
    }

    getNavLinkProps(specificProp) {
        var props = {
            inicio: {
                exact: true,
                to: '/'
            },
            informacion: {
                exact: true,
                to: '/info'
            },
            reservas: {
                exact: true,
                to: '/reservas'
            }
        };

        return props[specificProp];
    }
}

export default NavBar;
import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import '../../_assets/css/style.css';

class NavBar extends React.Component {

    constructor(props) {
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
                    <Grid container direction="column" justify="space-between" alignItems="center">
                        <Grid item>
                            <ButtonGroup size="small" aria-label="small outlined button group" >
                                <div className="separarboton">
                                    <NavLink {...this.getNavLinkProps('inicio')}><Button size="small" variant="outlined" >
                                        Inicio
                                    </Button></NavLink>
                                </div>
                                <div className="separarboton">
                                    <NavLink {...this.getNavLinkProps('informacion')}><Button size="small" variant="outlined"
                                        className="separarboton">Informacion
                                    </Button></NavLink>
                                </div>
                                <div className="separarboton">
                                    <NavLink {...this.getNavLinkProps('reservas')}><Button size="small" variant="outlined">
                                        Reservas</Button></NavLink>
                                </div>
                            </ButtonGroup>
                        </Grid>
                    </Grid>
                </div>
                {this.state.diaShow ? "dia" : null}
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
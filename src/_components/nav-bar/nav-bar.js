import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import style from '../../_assets/css/font.css';

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
                    <Grid container spacing={1} direction="column" alignItems="center">
                        <Grid item>
                            <ButtonGroup size="small" aria-label="small outlined button group" >
                                <NavLink {...this.getNavLinkProps('inicio')}><Button size="small" variant="outlined">
                                    Inicio
                                    </Button></NavLink>
                                <NavLink {...this.getNavLinkProps('informacion')}><Button size="small" variant="outlined"
                                className={style.separarboton}>Informacion
                                </Button></NavLink>
                                <NavLink {...this.getNavLinkProps('reservas')}><Button size="small" variant="outlined">
                                    Reservas</Button></NavLink>
                            </ButtonGroup>
                        </Grid>
                    </Grid>
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
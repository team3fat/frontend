import React, { Component } from 'react'
import Grid from '@material-ui/core'

export default class ConfirmacionReserva extends Component {
    render() {
        return (
            <div className="divPrincipal">
                <Grid
                    container
                    justify="center"
                >
                    <h1>Felicidades, tu reserva ha sido enviada, un administrador se contactara contigo para confirmarla</h1>
                </Grid>
            </div>
        )
    }
}

//import Calendar from 'react-calendar'
//import { Calendar } from '@fullcalendar/core';
//import dayGridPlugin from '@fullcalendar/daygrid';
// import BookingCalendar from '../../_components/react-booking-calendar/src/BookingCalendar';
//import FormControl from '@material-ui/core/FormControl';
//import Button from '@material-ui/core/Button';
//import Paper from '@material-ui/core/Paper';
import BookingCalendar from '../../_components/calendario/BookingCalendar';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import { Grid, FormControl, Button, Paper, Typography } from '@material-ui/core';
var moment = require('moment');
import React, { Component } from 'react';
import './Reservas.css';

export default class Reservas extends Component {

    constructor(props) {
        super(props);
        this.state = {
            diasTraidos: [],
            bookingArray: [],
            estadoActual: null,
            estadosTraidos: null,
            diasAReservar: [new Date(), new Date()],
        };
    }

    componentWillMount() {
        fetch("http://127.0.0.1:8000/diquecito/calendario/")
            .then(response => response.json())
            .then(json => { this.getDiasReservados(json) })
    }

    render() {
        return (
            <div className='mainDiv'>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item xs={12}>
<<<<<<< HEAD
                        <Paper className='paper' square={true} xs={12}>
                            <Typography variant="h2" className='header'>Calendario</Typography>
=======
                        <Paper className='paper' square={true}>
                            <Typography variant="h3" className='header'>Estos son los dias ya reservados</Typography>
                            <Typography variant="h4" className='reservado'>Este color tendran los dias reservados</Typography>
                            <Typography variant="h4" className='pedido'>Este color tendran los dias pedidos</Typography>
>>>>>>> c1dd0aed9878ec7ac25f84aa0fda384756c9e491
                            {this.renderCaledarioConReservas()}
                            <Typography variant="h3" className='header'>Hace tu reserva aca</Typography>
                            {this.renderCalendario()}
                            {this.renderFormControl()}
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }

    renderCaledarioConReservas() {
        return (
            <div>
                <BookingCalendar
                    bookings={
                        this.state.bookingArray
                    }
                />
            </div>
        );
    }

    renderCalendario() {
        return (
            <div>
                <DateRangePicker
                    minDate={new Date()}
                    onChange={this.onChange}
                    value={this.state.diasAReservar}
                    onCancel={this.cancelarDiasReservados}
                    format="dd-MM-y"
                />
            </div>
        );
    }

    renderFormControl() {
        return (
            <FormControl method="POST" fullWidth>
                <Button onClick={() => { this.onSubmit() }} color="primary">Reservar!</Button>
            </FormControl>
        );
    }
    onChange = date => this.setState({ diasAReservar: date })

    onSubmit() {
        var comienzo = this.state.diasAReservar[0]
        var final = this.state.diasAReservar[1]
        var estadoActual = "PEDIDO"
        var objeto = {
            comienzo: this.transformarFecha(comienzo),
            final: this.transformarFecha(final),
            estadoActual: estadoActual
        }
        var config = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(objeto),
            credentials: 'omit',
            mode: 'cors',
            cache: 'no-cache'
        }
        fetch("http://127.0.0.1:8000/diquecito/reservacion/", config)
            // .then(res => res.json())
            .then(resp => {
                if (!resp.ok) {
                    console.log("Error!", resp)
                } else {
                    console.log(resp)
                    window.location.replace("http://localhost:3000/confirmacion")
                }
            })
            .catch(err => console.log(("Error! This is the error:", err)))
    }

    getDiasReservados(reservas) {
        var diasTraidos = [];
        var estadosTraidos = [];
        var diasLoopeados = [];
        reservas.forEach(datos => {
            var diasCompletosLoopeados = this.loopeoInicioFin(new Date(datos.comienzo), new Date(datos.final), datos.estado)
            diasTraidos.push(datos.comienzo, datos.final)
            estadosTraidos.push(datos.estado)
            diasLoopeados.push(diasCompletosLoopeados)
        });
        this.setState({
            diasTraidos: diasTraidos,
            estadosTraidos: estadosTraidos,
            bookingArray: diasLoopeados.flat()
        });
        return (diasTraidos, estadosTraidos)
    }

    loopeoInicioFin(inicio, final, estado) {
        var index;
        var arrayDiasYEstados = [];
        //var estadosActuales = [];
        for (index = inicio.getDate(); index <= final.getDate(); index++) {
            var dia = new Date(inicio.getFullYear(), inicio.getMonth(), index + 1)
            var shapeDelBooking = {
                date: dia,
                estado: estado
            };
            arrayDiasYEstados.push(shapeDelBooking);
        }
        return arrayDiasYEstados
    }

    transformarFecha(fecha) {
        return moment(fecha).format('YYYY-MM-DD')
    }

    cancelarDiasReservados() {
        console.log("Me cancelo!")
    }

}

//import Calendar from 'react-calendar'
//import { Calendar } from '@fullcalendar/core';
//import dayGridPlugin from '@fullcalendar/daygrid';
//import BookingCalendar from '../../_components/react-booking-calendar/src/BookingCalendar';
//import FormControl from '@material-ui/core/FormControl';
//import Button from '@material-ui/core/Button';
//import Paper from '@material-ui/core/Paper';
import BookingCalendar from '../../_components/calendario/BookingCalendar';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import { Grid, FormControl, Button, Paper, Typography, GridList, TextField} from '@material-ui/core';
var moment = require('moment');
import React, { Component } from 'react';
import './Reservas.css';

export default class Reservas extends Component {

    constructor(props) {
        super(props);
        this.state = {
            diasTraidos: [],
            bookingArray: [],
            estadoActual: undefined,
            estadosTraidos: undefined,
            diasAReservar: [new Date(), new Date()],
            nombre: undefined,
            apellido: undefined,
            telefono: undefined,
            mail: undefined,
            entidad: undefined,
            cantidadPersonas: undefined,
            consulta: undefined
        };
    }

    componentWillMount() {
        fetch("http://127.0.0.1:8000/diquecito/calendario/")
            .then(response => response.json())
            .then(json => { this.getDiasReservados(json) })
    }

    render() {
        return (
            <div>
                <Grid
                    container
                    justify="center"
                >
                        <Paper className='paper'>
                            {this.renderTitulos()}
                            {this.renderCaledarioConReservas()}
                            <Typography variant="h3" className='header'>Hace tu reserva aca</Typography>
                            {this.renderCalendario()}
                            {this.renderFormControl()}
                        </Paper>
                </Grid>
            </div>
        );
    }

    renderTitulos(){
        return(
            <div>
                <Typography variant="h3" className='header'>Estos son los dias ya reservados</Typography>
                <Typography variant="h4" className='reservado'>Este color tendran los dias reservados</Typography>
                <Typography variant="h4" className='pedido'>Este color tendran los dias pedidos</Typography>
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
            <div className="dateRangePicker">
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
            <div className="formReservas">
                <FormControl method="POST" fullwidth>
                    <GridList cellHeight={60} cols={2}>
                        <TextField required id="Txtnombre" varian="outlined" label="Nombre" value={this.state.nombre} onChange={this.setNombre}></TextField>
                        <TextField required id="Txtapellido" varian="outlined" label="Apellido" value={this.state.apellido} onChange={this.setApellido}></TextField>
                        <TextField required id="Txttelefono" varian="outlined" label="Telefono" value={this.state.telefono} onChange={this.setTelefono}></TextField>
                        <TextField required id="Txtemail" varian="outlined" label="Email" value={this.state.mail} onChange={this.setMail}></TextField>
                        <TextField required id="Txtentidad" varian="outlined" label="Entidad a la cual pertenece" value={this.state.entidad} onChange={this.setEntidad}></TextField>
                        <TextField required id="Txtpersonas" varian="outlined" label="Cantidad de personas" value={this.state.cantidadPersonas} onChange={this.setPersonas}></TextField>
                        <TextField required id="TxtCosulta" varian="outlined" label="Consulta que quieras hacer" value={this.state.consulta} onChange={this.setConsulta}></TextField>
                    </GridList>
                    <Button onClick={() => { this.onSubmit() }} color="primary">Reservar!</Button>
                </FormControl>
            </div>
        );
    }

    onSubmit() {

        console.log(this.state)

        var comienzo = this.state.diasAReservar[0]
        var final = this.state.diasAReservar[1]
        var estadoActual = "PEDIDO"
        var nombre = this.state.nombre
        var apellido = this.state.apellido
        var telefono = this.state.telefono
        var mail = this.state.mail
        var entidad = this.state.entidad
        var personas = this.state.cantidadPersonas
        var consulta = this.state.consulta

        var objeto = {
            comienzo: this.transformarFecha(comienzo),
            final: this.transformarFecha(final),
            nombre: nombre,
            apellido: apellido,
            telefono: telefono,
            email: mail,
            entidad: entidad,
            cant_personas: personas,
            consulta: consulta,
            estado: estadoActual,
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
                    alert("Error!")
                } else {
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

    onChange = date => this.setState({ diasAReservar: date })

    setNombre = nombre => this.setState({ nombre: nombre.target.value })
    setApellido = apellido => this.setState({ apellido: apellido.target.value })
    setTelefono = telefono => this.setState({ telefono: telefono.target.value })
    setMail = mail => this.setState({ mail: mail.target.value })
    setEntidad = entidad => this.setState({ entidad: entidad.target.value })
    setPersonas = personas => this.setState({ cantidadPersonas: personas.target.value })
    setConsulta = consulta => this.setState({ consulta: consulta.target.value })

}

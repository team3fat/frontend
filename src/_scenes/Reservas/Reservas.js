import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import Calendar from 'react-calendar'
//import { Calendar } from '@fullcalendar/core';
//import dayGridPlugin from '@fullcalendar/daygrid';
var moment = require('moment');

export default class Reservas extends Component {

    constructor(props) {
        super(props);
        this.state = {
            diasTraidos: [],
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
            <div>
                <h1>Estos son los dias ya reservados</h1>
                {this.renderCaledarioConReservas()}
                <h1>Hace tu reserva aca</h1>
                {this.renderCalendario()}
                {this.renderFormControl()}
            </div>
        );
    }

    renderCaledarioConReservas(){
        return(
            <div>
                <Calendar
                />
            </div>
        )
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
        console.log(objeto)
        fetch("http://127.0.0.1:8000/diquecito/reservation/", config)
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

    getDiasReservados(json) {
        var diasTraidos = [];
        var estadosTraidos = [];
        json.forEach(x => {
            diasTraidos.push(x.comienzo, x.final)
            estadosTraidos.push(x.estado)
            //console.log(x)
        });
        this.setState({ diasTraidos: diasTraidos, estadosTraidos: estadosTraidos })
        console.log("Lista:", this.state.diasTraidos)
        console.log(this.state.estadosTraidos)
        return (diasTraidos, estadosTraidos)
    }

    transformarFecha(fecha) {
        return moment(fecha).format('YYYY-MM-DD')
    }

    cancelarDiasReservados(){
        console.log("Me cancelo!")
    }

}

import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
var moment = require('moment');

export default class Reservas extends Component {

    constructor(props) {
        super(props);
        this.state = {
            diasComienzo: [],
            diasFinal: [],
            estado: null,
            estados: null,
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
                <h1>Hace tu reserva aca</h1>
                <p>{this.state.dia}</p>
                {this.renderCalendar()}
                {this.renderFormControl()}
            </div>
        );
    }

    renderCalendar() {
        return (
            <div>
                <DateRangePicker
                    minDate={new Date()}
                    onChange={this.onChange}
                    value={this.state.diasAReservar}
                    format="dd-MM-y"
                />
            </div>
        );
    }

    renderFormControl() {
        return (
            <FormControl method="POST">
                <Button onClick={() => { this.onSubmit() }} color="primary">Reservar!</Button>
            </FormControl>
        );
    }

    onChange = date => this.setState({ diasAReservar: date })

    onSubmit() {
        var comienzo = this.state.diasAReservar[0]
        var final = this.state.diasAReservar[1]
        var estado = "PEDIDO"
        var objeto = {
            comienzo: this.transformarFecha(comienzo),
            final: this.transformarFecha(final),
            estado: estado
        }
        var config = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: objeto,
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
                }
            })
            .catch(err => console.log(("Error! This is the error:", err)))
    }

    getDiasReservados(json) {
        var diasComienzo = [];
        var diasFinal = [];
        var estados = [];
        json.forEach(x => {
            diasComienzo.push(x.comienzo)
            diasFinal.push(x.final)
            estados.push(x.estado)
            console.log(x)
        });
        this.setState({ diasComienzo: diasComienzo, diasFinal: diasFinal, estados: estados })
        console.log(this.state.diasComienzo)
        console.log(this.state.diasFinal)
        console.log(this.state.estados)
        return (diasComienzo, diasFinal, estados)
    }

    transformarFecha(fecha) {
        return moment(fecha).format('MM-DD-YYYY')
    }

}

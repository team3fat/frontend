import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

export default class Reservas extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: null,
            descripcion: null,
            estado: null,
            diasTotales: [new Date(), new Date()],
        };
    }

    render() {
        return (
            <div>
                <a>Bienvenido/a {this.state.name}</a>
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
                    value={this.state.diasTotales}
                    format="dd-MM-y"
                />
            </div>
        );
    }

    renderFormControl() {
        return (
            <FormControl>
                <h4>Desde</h4>
                <Input id="diaInicio" placeholder="Desde"></Input>
                <h4>Hasta</h4>
                <Input id="diaFin" placeholder="Hasta"></Input>
            </FormControl>
        );
    }

    onChange = date => this.setState({ date })

    componentWillMount() {
        fetch("https://randomuser.me/api/")
            .then(response => response.json())
            .then(json => this.setState({ name: json.results[0].name.first })) //console.log(json.results[0].name)        

    }
}

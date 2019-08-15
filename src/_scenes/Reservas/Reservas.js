import React, { Component } from 'react';
import Calendar from 'react-calendar';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
//import Pepe from './pepe.js';

export default class Reservas extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: null,
            diaInicio: null,
            diaFin: null,
            descripcion: null,
            diasTotales: [],
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
            <Calendar {...this.getCalendarProps()} />
        );
    }

    renderFormControl() {
        return (
            <FormControl>
                <Input id="diaInicio" placeholder="Desde"></Input>
                <Input id="diaFin" placeholder="Hasta"></Input>
            </FormControl>
        );
    }

    getCalendarProps() {
        return {        
            minDate: new Date(),
            onClickDay: this.selectDia.bind(this)
        }
    }

    returnLista(dia) {
        let diasTotales = this.state.diasTotales
        diasTotales.push(dia)
        return diasTotales
    }

    selectDia(event){
        console.log(event.getDate());
        this.setState({
            diasTotales: this.returnLista(event.getDate())
        });
        console.log(this.state.diasTotales)
    }

    componentWillMount(){
        fetch("https://randomuser.me/api/")
         .then(response => response.json())
         .then(json => this.setState({name: json.results[0].name.first})) //console.log(json.results[0].name)        
        
    }

    pepeCallback() {
        this.setState({
            text: "holi"
        })
    }
}

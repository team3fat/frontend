import React, { Component } from 'react';
import Calendar from 'react-calendar';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
//import Pepe from './pepe.js';

export default class Reservas extends Component {

    constructor(props){
        super(props);
        this.state={
            name: null,
            diaInicio: null,
            diaFin: null,
            descripcion: null,
            diasTotales: [],
        };    
    }

    

    selectDia(event){
        console.log(event.getDate());
        this.setState({});
        console.log(diasTotales)
    }
    
    componentWillMount(){
        fetch("https://randomuser.me/api/")
         .then(response => response.json())
         .then(json => this.setState({name: json.results[0].name.first})) //console.log(json.results[0].name)        
        
    }

    render() {
        return (
            <div>
                <a>Bienvenido/a {this.state.name}</a>
                <p>{this.state.dia}</p>
                <Calendar
                    minDate={new Date()}
                    onClickDay={this.selectDia.bind(this)}
                />
                <FormControl>
                    <Input id="diaInicio" placeholder="Desde"></Input>
                    <Input id="diaFin" placeholder="Hasta"></Input>
                </FormControl>
            </div>
        )
    }

    pepeCallback() {
        this.setState({
            text: "holi"
        })
    }
}

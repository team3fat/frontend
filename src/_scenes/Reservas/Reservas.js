import React, { Component } from 'react';
import Calendar from 'react-calendar';
//import Pepe from './pepe.js';

export default class Reservas extends Component {

    constructor(props){
        super(props);
        this.state={
            name: null,
            dia: null,
        };
    }

    selectDia(event){
        console.log(event.getDate());
        this.setState({dia: event.getDate()})
        var diaChangedEvent = new Event('DiaChanged');
        window.dispatchEvent(diaChangedEvent)
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
            </div>
        )
    }

    pepeCallback() {
        this.setState({
            text: "holi"
        })
    }
}

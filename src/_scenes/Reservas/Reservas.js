import React, { Component } from 'react';
import Calendar from 'react-calendar';
import Pepe from './pepe'

export default class Reservas extends Component {

    constructor(props){
        super(props);
        this.state={
            name: null,
            dia: null,
        };
    }

    selectDia(event){
        console.log(event);
        this.setState({dia: event.getDate()})
        var diaChangedEvent = new Event('DiaChanged');
        window.dispatchEvent(diaChangedEvent)
    }
    
    componentDidMount(){
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
                <Pepe callback={this.pepeCallback.bind(this)}></Pepe>
            </div>
        )
    }

    pepeCallback() {
        this.setState({
            text: "holi"
        })
    }
}

import React, { Component } from 'react';
import Calendar from 'react-calendar';

export default class Reservas extends Component {

    constructor(props){
        super(props);
        this.state={
            gender: null
        };
    }
    
    componentDidMount(){
        fetch("https://randomuser.me/api/")
         .then(response => response.json())
         .then(json => this.setState({gender: json.results[0].name.first})) //console.log(json.results[0].gender)
    }
    render() {
        return (
            <div>
                <a>Bienvenido/a {this.state.gender}</a>
                <Calendar
                    minDate={new Date()}
                />
            </div>
        )
    }
}

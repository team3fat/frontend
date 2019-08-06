import React, { Component } from 'react';
import Calendar from 'react-calendar';

export default class Reservas extends Component {
    componentDidMount(){
        fetch('www.google.com')
         .then(response => response.json())
         .then(json => console.log(json))
    }
    render() {
        return (
            <div>
                <Calendar
                    minDate={new Date()}
                />
            </div>
        )
    }
}

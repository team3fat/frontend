import React, { Component } from 'react';
import Calendar from 'react-calendar';

export default class Reservas extends Component {
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

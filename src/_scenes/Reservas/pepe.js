import React, { Component } from 'react'

export default class pepe extends Component {

    constructor (props) {
        super(props)
        this.state = {
            text: null
        }
    }


    render() {
        return (
            <div>
                {this.props.callback()}
                {this.state.text}
            </div>
        )
    }
}

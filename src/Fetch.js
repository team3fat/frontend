import React, { Component } from 'react';
//import axios from 'axios';
const API = 'http://127.0.0.1:8000/diquecito/Usuario/';
//const DEFAULT_QUERY = '';

class Fetch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hits: null,
            error: null,
        };
    }
  
    componentDidMount() {
        fetch(API)
        .then(response => response.json())
        .then(data => this.setState({hits: data}))
    }

    render() {
        const { hits } = this.state;
        return (
          <p>{hits.hits}</p>
        );
      }
}

export default Fetch;
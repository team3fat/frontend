import React, { Component } from 'react';
import axios from 'axios';
//const API = 'https://hn.algolia.com/api/v1/search?query=';
//const DEFAULT_QUERY = 'redux';

class Fetch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            datos: [],
            error: null,
        };
    }
  
    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/animals')
        .then(result => this.setState({
          datos: result.data,
          
        }))
        .catch(error => this.setState({
          error,
        }));
    }

    render() {
        const { datos } = this.state;
        return (
          <p>{datos.map(hit => <p>{hit.race}</p>)}</p>
        );
      }
}

export default Fetch;
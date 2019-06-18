import React, { Component } from 'react';
import axios from 'axios';
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
        axios.get(API)
        .then(result => {
          this.setState({
          hits: result.data,
          });
          console.log(result);
      })
        .catch(error => this.setState({
          error,
        }));
    }

    render() {
        const { hits } = this.state;
        return (
          <p>{hits}</p>
        );
      }
}

export default Fetch;
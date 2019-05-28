import React, { Component } from 'react';
import axios from 'axios';
//const API = 'https://hn.algolia.com/api/v1/search?query=';
//const DEFAULT_QUERY = 'redux';

class Fetch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hits: [],
            error: null,
        };
    }
  
    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/animals')
        .then(result => this.setState({
          hits: result.data,
          
        }))
        .catch(error => this.setState({
          error,
        }));
    }

    render() {
        const { hits } = this.state;
        return (
          <p>{hits.map(hit => <p>{hit.race}</p>)}</p>
        );
      }
}

export default Fetch;
import React, { Component } from 'react';
import axios from 'axios';
const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

class Fetch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hits: [],
            error: null,
        };
    }
  
    componentDidMount() {
        axios.get(API + DEFAULT_QUERY)
        .then(result => this.setState({
          hits: result.data.hits,
        }))
        .catch(error => this.setState({
          error,
        }));
    }

    render() {
        const { hits } = this.state;
    
        return (
          <ul>
            {hits.map(hit =>
              <li key={hit.objectID}>
                <i id="i">{hit.title}</i>
              </li>
            )}
          </ul>
        );
      }
}

export default Fetch;
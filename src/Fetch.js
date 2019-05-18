import React, { Component } from 'react';
const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

class Fetch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hits: [],
        };
    }
  
    componentDidMount() {
        fetch(API + DEFAULT_QUERY)
        .then(response => response.json())
        .then(data => this.setState({ hits: data.hits }));
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
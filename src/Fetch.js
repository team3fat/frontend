import React, { Component } from 'react';

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

class Fetch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hits: [],
            isLoading: false,
            error: null,
        };
    }
  
    componentDidMount() {

        this.setState({ isLoading: true });

        fetch(API + DEFAULT_QUERY)
        .then(response => response.json())
        .then(data => this.setState({hits: data.hits, isLoading: false}))
        .catch(error => this.setState({error, isLoading: false}));
    };

    render(){
        return (
            response => response.json()
        )
    }
}

export default Fetch;
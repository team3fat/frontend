import React, { Component } from 'react';
//import axios from 'axios';
const BASE_URL = 'http://127.0.0.1:8000';
//const DEFAULT_QUERY = '';

class Fetch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            first_name: '',
            email: '',
            password: '',
            error: null,
        };
    }

    fetchUsers() {
        fetch(BASE_URL + '/diquecito/usuario/')
        .then(response => response.json())
        .then(json => console.log(json))
    }
  
    componentDidMount() {
        this.fetchUsers();
    }

    render() {
        //const datos = this.state;
        return (
          <p>{this.state.map((user) => (
              <div>{user}</div>
          ))}</p>
        );
      }
}

export default Fetch;
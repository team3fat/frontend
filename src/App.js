import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./index.css";
//import Bootstrap from "react-bootstrap";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      surname:"",
      email: "",
      password: ""
    };
  }

  validateForm = event => {
    return this.state.name.length > 0 && this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="Register">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="name" bsSize="large">
            <i>Name: </i>
            <Form.Control
              autoFocus
              value={this.state.name}
              onChange={this.handleChange}
              type="name"
              id="name"
            />
          </Form.Group>
          <Form.Group controlId="surname" bsSize="large">
            <i>Surname: </i>
            <Form.Control
              autoFocus
              value={this.state.surname}
              onChange={this.handleChange}
              type="surname"
              id="surname"
            />
          </Form.Group>
          <Form.Group controlId="email" bsSize="large">
            <i>Email:</i>
            <Form.Control
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              id="email"
            />
          </Form.Group>
          <Form.Group controlId="password" bsSize="large">
            <i>Password: </i>
            <Form.Control
              id="password"
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </Form.Group>
          <Button
            id="btn_register"
            block
            size="large"
            disabled={!this.validateForm()}
            type="Register"
            onClick={event => {
              document.getElementById("mostrarRegistro").innerHTML = this.state.name;
              document.getElementById("")
            }}
          >
            Register
          </Button>
        </Form>
        <p id="mostrarRegistro">
        </p>
        
      </div>
    );
  }
}
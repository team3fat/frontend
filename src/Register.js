import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./index.css";
import "./App.css";
import './materialize.css';

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      lastname: "",
      email: "",
      password: ""
    };
  }

  validateForm = event => {
    return this.state.name.length > 0 && this.state.email.length > 0 && this.state.password.length >= 4 && this.state.password.length < 10;
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
      <div class="Container">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="name" bsSize="large">
            <i>First Name </i>
            <Form.Control
              autoFocus
              value={this.state.name}
              onChange={this.handleChange}
              type="email"
              id="name"
            />
          </Form.Group>
          <Form.Group controlId="email" bsSize="large">
            <i>Last Name</i>
            <Form.Control
              value={this.state.lastname}
              onChange={this.handleChange}
              type="email"
              id="lastname"
            />
          </Form.Group>
          <Form.Group controlId="email" bsSize="large">
            <i>Email</i>
            <Form.Control
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              id="email"
            />
          </Form.Group>
          <Form.Group controlId="password" bsSize="large">
            <i>Password </i>
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
              document.getElementById("mostrarRegistro").innerHTML = "Registrado con exito";
              document.getElementById("password").value = "";
              document.getElementById("lastname").value = "";
              document.getElementById("email").value = "";
              document.getElementById("name").value = "";
            }}
          >
            Register
          </Button>
        </Form>
        <p id="mostrarRegistro" class="mostrarRegistro">
        </p>

      </div>
    );
  }
}
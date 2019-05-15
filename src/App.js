import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./index.css"
//import Bootstrap from "react-bootstrap";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
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

  registerUser = event => {
    document.getElementById("mostrarRegistro");
    return;
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
            />
          </Form.Group>
          <Form.Group controlId="email" bsSize="large">
            <i>Email:</i>
            <Form.Control
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
            />
          </Form.Group>
          <Form.Group controlId="password" bsSize="large">
            <i>Password: </i>
            <Form.Control
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </Form.Group>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="Register"
            onClick={this.registerUser()}
          >
            Register
          </Button>
        </Form>
        <p id="mostrarRegistro" >
        {this.state.name}
        {this.state.email}
        {this.state.passwords}
        </p>
        
      </div>
    );
  }
}
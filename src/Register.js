import React, { Component } from "react";
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
    alert("Registrado con exito");
  }

  render() {
    return (
      <div class="Container">
      <form onSubmit={this.handleSubmit}>
      <label class="white-text">
        Email:
        <input type="email" name="email" />
      </label>
      <label class="white-text">
        Password:
        <input type="password" name="password"/>
      </label>
        <input type="submit" value="Submit" class="btn indigo darken-5" />
      </form>
      </div>
    );
  }
}
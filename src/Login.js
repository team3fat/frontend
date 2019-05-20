import React, { Component } from "react";
// import form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import "./index.css";
import Form from "react-bootstrap/Form";
import "./App.css";
import './materialize.css';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            account: "",
            password: ""
        }
    }

    validateUser = event => {
        return 1;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    render() {
        return (
            <div class="Container">
                <h1>Ingresa con tu cuenta</h1>
                <Form>
                    <Form.Group controlId="account" >
                        <i>Usuario: </i>
                        <Form.Control
                            autoFocus
                            id="account"
                            value={this.state.account}
                            onChange={this.handleChange}
                            type="text"
                        />
                    </Form.Group>
                    <Form.Group>
                        <i>Password: </i>
                        <Form.Control
                            id="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                        />
                    </Form.Group>
                </Form>
            </div>
        )
    }

}
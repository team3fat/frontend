import React, { Component } from "react";
// import form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import "./index.css";
import "./App.css";
import './materialize.css';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: "",
            password: "",
            token: null,
        }
    }

    handleSubmit = event => {
        let inUser = document.getElementById('usuario').innerHTML
        let inPassword = document.getElementById('password').innerHTML
        this.setState({
            user: inUser,
            password: inPassword
        });
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    render() {
        return (
            <div className="Container">
                <h1 className="white-text">Ingresa con tu cuenta</h1>
                <form className="white-text" onSubmit={this.handleSubmit} method="get" action="#/mainLogined">
                    Usuario:
                    <input type="text" name="usuario" id="usuario" required/>
                    Contraseña:
                    <input type="password" name="password" id="password" required/>
                    <input type="submit" value="Ingresar!" id="btnIngresar" className="btn indigo darken-2" />
                </form>
            </div>
        )
    }

}
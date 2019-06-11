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
            account: "",
            password: ""
        }
    }

    handleSubmit = event => {
        let inUser = document.getElementById('usuario').innerHTML
        let inPassword = document.getElementById('password').innerHTML
        if(inUser <= 0 && inPassword <= 0){
            console.log("Usuario o password vacios");
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    render() {
        return (
            <div class="Container">
                <h1 class="white-text">Ingresa con tu cuenta</h1>
                <form class="white-text" onSubmit={this.handleSubmit}>
                    Usuario:
                    <input type="text" name="usuario" id="usuario" />
                    Contraseña:
                    <input type="password" name="password" id="password" />
                    <input type="submit" value="Ingresar!" id="btnIngresar" class="btn indigo darken-2" />
                </form>
            </div>
        )
    }

}
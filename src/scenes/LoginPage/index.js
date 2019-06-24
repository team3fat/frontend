import React, { Component } from 'react';
import { connect } from 'react-redux';
import loginUser from '../../actions';
import '../../materialize.css';

class LoginPage extends Component {
    constructor(props){
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name + " " + value)
        this.setState(prevState => {
            const newState = {
                ...prevState
            };
            newState[name] = value;
            return newState
        })
    }

    handleLogin(e, creds){
        this.props.loginUser(creds);
    }


    render() {
        return (
            <div className="Container">
                <h1 className="white-text">Ingresa con tu cuenta</h1>
                <form className="white-text" onSubmit={this.handleChange} method="get" action="#/mainLogined">
                    Usuario:
                    <input type="text" name="usuario" id="usuario" placeholder="Usuario" onChange={this.handleChange} required/>
                    Contraseña:
                    <input type="password" name="password" id="password" placeholder="Contraseña" onChange={this.handleChange} required/>
                    <input type="submit" value="Ingresar!" id="btnIngresar" className="btn indigo darken-2" onClick= {e => this.handleLogin(e, this.state)} />
                </form>
            </div>
        );
    }
}

export default connect(null, { loginUser })(LoginPage);

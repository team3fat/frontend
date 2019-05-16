import React, {Component} from "react";
import form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./index.css";
import Form from "react-bootstrap/Form";

export default class Login extends Component{
    constructor(props){
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
        return(
            <div className="Login">
            <Form>
                <Form.Group controlId="account" >
                    <Form.Control
                        autoFocus
                        id="account"
                        value={this.state.account}
                        onChange={this.handleChange}
                        type="account"
                    />
                </Form.Group>
                <Form.Group>
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
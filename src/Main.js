import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home.js";
import Reservation from "./Reservation.js";
import FAQ from "./FAQ.js";
import Register from './Register';
import Login from './Login.js';
import './Main.css';
import Button from "react-bootstrap/Button";
import './materialize.css';

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1 class="card-panel yellow darken-4 center">El Diquecito</h1>
          <h2 className="subtitle"><Button onClick={event => {}}><i class="card-panel yellow darken-4">Registrate</i></Button> o,
             si tenes cuenta: <Button onClick={event => { }} ><i class="card-panel yellow darken-4">Ingresa</i></Button>
          </h2>
          <ul className="header">
            <li className="mainLi"><NavLink to="/reservation">Reservations</NavLink></li>
            <li className="mainLi"><NavLink to="/">Home</NavLink></li>
            <li className="mainLi"><NavLink to="/FAQ">FAQ</NavLink></li>
          </ul>
          <div className="content">
            <Route path="/register" component={Register}></Route>
            <Route path="/login" component={Login}></Route>
            <Route exact path="/" component={Home} />
            <Route path="/reservation" component={Reservation} />
            <Route path="/FAQ" component={FAQ} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
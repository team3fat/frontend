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
import './materialize.css';

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1 class="card-panel yellow darken-4 center">El Diquecito</h1>
          <h2 className="subtitle"><a href="#/register" class="btn yellow darken-4 large">Registrate</a> o,
             si tenes cuenta: <a href="#/login" class="btn yellow darken-4">Ingresa</a>
          </h2>
          <ul class="header center">
            <li><NavLink to="/reservation">Reservations</NavLink></li>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/FAQ">FAQ</NavLink></li>
          </ul>
          <div className="content yellow darken-4">
            <Route exact path="/" component={Home} />
            <Route path="/register" component={Register}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/reservation" component={Reservation} />
            <Route path="/FAQ" component={FAQ} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
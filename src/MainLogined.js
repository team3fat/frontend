import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home.js";
import Reservation from "./Reservation.js";
import FAQ from "./FAQ.js";
import Fetch from './Fetch.js';
import './Main.css';
import './materialize.css';

class MainLogined extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1 class="card-panel yellow darken-4 center white-text">El Diquecito</h1>
          <h2 className="subtitle">
          </h2>
          <ul class="header center">
            <li><NavLink to="/reservation">Reservations</NavLink></li>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/FAQ">FAQ</NavLink></li>
          </ul>
          <div className="content yellow darken-4">
            <Route exact path="/" component={Home} />
            <Route path="/reservation" component={Reservation} />
            <Route path="/FAQ" component={FAQ} />
            <Route path="/fetch" component={Fetch} />
            <Route path="/mainLogined" component={Home} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default MainLogined;
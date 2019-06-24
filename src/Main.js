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
//import Login from './Login.js';
import LoginPage from './scenes/LoginPage'
//import Fetch from './Fetch.js';
import ShowUsers from './scenes/ShowUsers';
import './Main.css';
import './materialize.css';

class Main extends Component {

  componentDidMount(){
    console.log("Loaded!");
  }
  
  render() {
    return (
      <HashRouter>
        <div>
          <h1 className="card-panel yellow darken-4 center white-text">El Diquecito<a href="#/register" className="btn indigo lighten large right">Registrate</a><a href="#/login" className="btn indigo lighten right">Ingresa</a></h1>
          <h2 className="subtitle">
          </h2>
          <ul className="header center">
            <li><NavLink to="/reservation">Reservations</NavLink></li>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/FAQ">FAQ</NavLink></li>
          </ul>
          <div className="content yellow darken-4">
            <Route exact path="/" component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={LoginPage} />
            <Route path="/reservation" component={Reservation} />
            <Route path="/FAQ" component={FAQ} />
            <Route path="/fetch" component={ShowUsers} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
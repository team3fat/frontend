import React, { Component } from "react";
import './Main.css';
 
class FAQ extends Component {
  render() {
    return (
        <div>
        <h2 className="center grey-text text-lighten-4 yellow darken-4">Aqui puedes preguntar lo que quieras!</h2>
        <ul>
          <li className="grey-text text-lighten-4 yellow darken-4">Alguien sabe cuanto tiempo es el maximo que las personas pueden quedarse?</li>
          <p className="grey-text text-lighten-4 yellow darken-4">Diego Gimenez dice:</p>
          <i className="grey-text text-lighten-4 yellow darken-4">Si, esta en la pagina principal</i>
        </ul>
        </div>
    );
  }
}
 
export default FAQ;
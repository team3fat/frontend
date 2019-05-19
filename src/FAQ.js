import React, { Component } from "react";
import './Main.css';
 
class FAQ extends Component {
  render() {
    return (
        <div>
        <h2 className="titleFAQ">Aqui puedes preguntar lo que quieras!</h2>
        <ul>
          <li className="pregFAQ">Alguien sabe cuanto tiempo es el maximo que las personas pueden quedarse?</li>
          <p className="textFAQ">Diego Gimenez dice:</p>
          <i className="answerFAQ">Si, esta en la pagina principal</i>
        </ul>
        </div>
    );
  }
}
 
export default FAQ;
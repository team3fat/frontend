import React, { Component } from "react";
import './Main.css';
 
class Home extends Component {
  render() {
    return (
      <div>
        <h2 className="titleHome">Hola, bienvenido a El Diquecito</h2>
        <p className="textHome">Cras facilisis urna ornare ex volutpat, et
        convallis erat elementum. Ut aliquam, ipsum vitae
        gravida suscipit, metus dui bibendum est, eget rhoncus nibh
        metus nec massa. Maecenas hendrerit laoreet augue
        nec molestie. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.</p>
 
        <p className="textHome">Esperamos ser de ayuda</p>
      </div>
    );
  }
}
 
export default Home;
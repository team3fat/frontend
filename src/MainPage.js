import React, { Component } from "react";

class MainPage extends Component{
    constructor(props){
        super(props);

        this.state={
            
        }
    }

    render(){
        return(
            <div>
                <div className="navBar">
                    <i>Bienvenido</i>
                </div>
                <div>
                    <i>A la pagina</i>
                </div>
                <div>
                    <i>Principal</i>
                </div>
            </div>
        )
    }
}

export default MainPage;
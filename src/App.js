import React from 'react';
//import "materialize-css/dist/css/materialize.min.css";
import { BrowserRouter } from 'react-router-dom';
import NavBar from './_components/nav-bar/nav-bar.js';
import AppRoutes from './routes.js';

function App(){
    return (
        <BrowserRouter>
            <div className="main">
                <section className="main--section">
                    <NavBar />
                    <AppRoutes />
                </section>
            </div>
        </BrowserRouter>
    );
}

export default App;
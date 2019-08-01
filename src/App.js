import React from 'react';
import "materialize-css/dist/css/materialize.min.css";
import NavBar from './_components/nav-bar/nav-bar';
import AppRoutes from './routes';

function App(){
    return (
            <div>
                <NavBar />
                <AppRoutes />
            </div>
    )
};
export default App
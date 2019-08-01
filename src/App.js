import React from 'react';
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
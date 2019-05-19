import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker'
// import Fetch from './Fetch.js';
// import Home from './Home.js';
// import Reservation from './Reservation.js';
// import FAQ from './FAQ.js';
import Main from './Main.js';

const mainPage = <Main />;
// const homePage = <Home />;
// const reservations = <Reservation />;
// const forum = <FAQ />;
// const webpage = <Login />;
// const pageFetch = <Fetch />;

ReactDOM.render(mainPage, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

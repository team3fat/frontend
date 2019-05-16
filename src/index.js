import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Register from './Register';
import * as serviceWorker from './serviceWorker';
import Login from './Login';
import Fetch from './Fetch,js';

const webpage = <Login />;
const pageFetch = <Fetch />;

ReactDOM.render(pageFetch, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

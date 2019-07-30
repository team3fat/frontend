import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker.js';
import App from './App.js';

ReactDOM.render(<App/>, document.getElementById('root'));

serviceWorker.unregister();
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from './App';
import registerServiceWorker from './registerServiceWorker';
import "normalize.css/normalize.css";

ReactDOM.render(
    <Navigation />, document.getElementById('root'));
registerServiceWorker();
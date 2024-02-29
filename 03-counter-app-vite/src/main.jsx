import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './HelloWorldApp.jsx';
import { HelloWorldApp } from './HelloWorldApp';
import { FirstApp } from './FirstApp';
import {CounterApp} from './CounterApp';

import './styles.css';

// ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.createRoot(document.getElementById('root')).render(
<CounterApp  value={20} />);



import React from 'react'
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';
import { FirstApp } from './FirstApp';
import { App, HelloWorldApp } from './HelloWorldApp';

import './styles.css';

ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        {/* <App /> */}
        {/* <HelloWorldApp /> */}

        {/* <FirstApp title="Hola! Soy yo" subtitle={ 123 } /> */}
    
        <CounterApp value={100} />
    </React.StrictMode>
);

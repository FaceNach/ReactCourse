import React from 'react';
import ReactDOM from 'react-dom/client';
import {App, JustTesting, TestingFromFunction} from "./HelloWorldApp.jsx";
import {FirstApp} from "./FirstApp.jsx";
import {CounterApp} from "./CounterApp.jsx";



import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/*<App />*/}
        {/*<JustTesting />*/}
        {/*<TestingFromFunction name="Nach"/>*/}
        {/*<FirstApp title='Hello World' subTitle={123}  />*/}
        <CounterApp value={20} />
    </React.StrictMode>
);
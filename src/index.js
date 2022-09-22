import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import Scout from './pages/Scout';
import { BrowserRouter as Router, Route } from "react-router-dom";


ReactDOM.render(
<Router>
    <Route path = "/" element = {<Home />}/>
    <Route path = "/Scout" element = {<Scout />}/>
</Router>,

document.getElementById(root)
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import './index.css';
import  ReactDOM  from "react-dom";

import reportWebVitals from './reportWebVitals';
import Home from "./pages/Home";
import Scout from "./pages/Scout";
import Analytics from './pages/Analytics';
import Team from './pages/Team';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


ReactDOM.render(
<Router>
    <Routes>
    <Route path = "/" element = {<Home />} />
    <Route path = "/Scout" element = {<Scout />} />
    <Route path = "/Analytics" element = {<Analytics />} />
    <Route path = "/Analytics/Team" element = {<Team />} />
    </Routes>
</Router>,

document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

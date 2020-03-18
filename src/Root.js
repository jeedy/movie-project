import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import IndexAjax from './page/index-ajax';

const Root = () => (
    <BrowserRouter>
        <Route exact path="/" component={Home}/>
        <Route exact path="/indexAjax" component={IndexAjax}/>
    </BrowserRouter>
);

export default Root;
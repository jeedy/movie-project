import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import IndexAjax from './page/index-ajax';

const Root = () => (
    <BrowserRouter>
        <Route exact path="/" component={App}/>
        <Route exact path="/indexAjax" component={IndexAjax}/>
    </BrowserRouter>
);

export default Root;
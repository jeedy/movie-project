import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./page/Home";
import IndexAjax from './page/index-ajax';

const Root = () => (
    <BrowserRouter>
        <Route exact path="/" component={Home}/>
        <Route path="/indexAjax" component={IndexAjax}/>
        <Route path="/indexAjax/:name" component={IndexAjax}/>

        {/* 하나만 보이고 싶으면 Switch를 사용한다.
        <Switch>
            <Route path="/indexAjax" component={IndexAjax}/>
            <Route path="/indexAjax/:name" component={IndexAjax}/>
        </Switch> */}
    </BrowserRouter>
);

export default Root;
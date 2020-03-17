import React from 'react';
import styled from 'styled-components';
import Header from '../header/header';
import "../App.css";

const IndexAjax = () => {
    return (
        <div className="App">
            <Header headerMessage={'Ajax sample'} />
            <h2>Ajax Sample</h2>
        </div>
    );
}

export default IndexAjax;
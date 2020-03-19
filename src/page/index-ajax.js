import React from 'react';
import styled from 'styled-components';
import Header from '../header/header';
import "../App.css";

const StyledDiv = styled.div`
    color: white;
`;

const IndexAjax = (props) => {
    return (
        <StyledDiv className="App">
            <Header headerMessage={'Ajax sample'} />
            <h2>Ajax Sample</h2>
            <ul>
                <li>{props.match.params.name? props.match.params.name:''}</li>
            </ul>
        </StyledDiv>
    );
}

export default IndexAjax;
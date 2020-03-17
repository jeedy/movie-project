import React from 'react';
import styled from 'styled-components';
import Header from '../header/header';
import "../App.css";

const StyledDiv = styled.div`
    h2 {
        color: white;
    }
`;

const IndexAjax = () => {
    return (
        <StyledDiv className="App">
            <Header headerMessage={'Ajax sample'} />
            <h2>Ajax Sample</h2>
        </StyledDiv>
    );
}

export default IndexAjax;
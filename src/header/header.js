import React, { Component } from 'react';
import styled from 'styled-components';

const HeaderDiv = styled.div`
  display:flex;
  justify-content: flex-start;
  padding: 3rem 2rem;
  > span {
    font-size: 2rem;
    font-weight: bold;
    color: #7f7f7f;
    transition: 0.25s;
    cursor: pointer;

    &:hover {
      color: white;
    }
  }
`;

class Header extends Component {
    render() {
        return (
          <HeaderDiv>
            <span>{this.props.headerMessage}</span>
          </HeaderDiv>
        );
    }
}

export default Header;

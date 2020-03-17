import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  > div {
    .menu {
      background-color: #343a40;
      height: 3.5rem;
    }
    .menu-item {
      display: inline-block;
      color: white;
      font-size: 1rem;
      line-height: 3.5rem;
      text-align: center;
      cursor: pointer;
      transition: background-color 0.3s;
      text-decoration: none;
      margin: 0px 10px;
    }
    .menu-item:hover {
        background-color: #495057;
    }
    .menu-item:active, .menu-item.active {
        background-color: #1862ab;
    }
  }
`;

const MenuItem = ({active, children, to}) => (
  <Link to={to} className="menu-item">
    {children}
  </Link>
);

class Header extends Component {
    render() {
        return (
          <HeaderDiv>
            <span>{this.props.headerMessage}</span>
            <div className="menu">
              <MenuItem to={'/'}>Movie</MenuItem>
              <MenuItem to={'/indexAjax'}>AJAX API</MenuItem>
            </div>
          </HeaderDiv>
        );
    }
}

export default Header;

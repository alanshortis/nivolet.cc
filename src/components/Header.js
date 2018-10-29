import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";

const SiteHeader = styled.header`
  display: flex;
  align-items: flex-end;
  height: 60px;
  background-color: #17191a;
  padding: 1rem;
  a {
    position: relative;
    color: white;
    margin-left: 2rem;
    text-decoration: none;
    text-transform: uppercase;
    color: #666666;
    line-height: 0.7;
    &.active {
      color: #efefef;
    }
  }
`;

const Header = () => (
  <SiteHeader>
    <Logo />
    <nav>
      <NavLink exact to="/">
        Map
      </NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  </SiteHeader>
);

export default Header;

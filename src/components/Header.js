import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";
import { measurements } from "../styles/settings";

const SiteHeader = styled.header`
  display: flex;
  height: ${measurements.headerHeight};
  background-color: #17191a;
  padding: ${measurements.contentMargin};
  nav {
    display: flex;
    align-items: flex-end;
    height: 100%;
  }
  a {
    position: relative;
    color: white;
    margin-left: 2rem;
    text-decoration: none;
    text-transform: uppercase;
    color: #666666;
    font-size: 0.9rem;
    line-height: 0.9em;
    &.active {
      color: #dd6969;
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

import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";
import { measurements, color } from "../styles/settings";

const SiteHeader = styled.header`
  display: flex;
  height: ${measurements.headerHeight};
  background-color: ${color.header};
  padding: ${measurements.contentMargin};
  nav {
    display: flex;
    align-items: flex-end;
    height: 100%;
  }
  a {
    position: relative;
    color: white;
    margin-left: ${measurements.contentMargin};
    text-decoration: none;
    text-transform: uppercase;
    color: ${color.typeMid};
    font-size: 0.9rem;
    line-height: 0.9em;
    &.active {
      color: ${color.highlight};
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

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
`;

const SiteNav = styled.nav`
  display: flex;
  align-items: flex-end;
  height: 100%;
  margin-left: ${measurements.contentMargin};
  a {
    text-decoration: none;
    text-transform: uppercase;
    color: ${color.typeMid};
    font-size: 0.9rem;
    line-height: 0.9em;
    &.active {
      color: ${color.highlight};
    }
    + a {
      margin-left: ${measurements.contentMargin};
    }
  }
`;

const Header = () => (
  <SiteHeader>
    <Logo />
    <SiteNav>
      <NavLink exact to="/">
        Map
      </NavLink>
      <NavLink to="/about">About</NavLink>
    </SiteNav>
  </SiteHeader>
);

export default Header;

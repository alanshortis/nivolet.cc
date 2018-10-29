import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";

const SiteHeader = styled.header`
  display: flex;
  align-items: center;
  height: 60px;
  background-color: #17191a;
  padding: 0 1rem;
  a {
    position: relative;
    color: white;
    margin-left: 2rem;
    text-decoration: none;
    text-transform: uppercase;
    margin-top: 6px;
    color: #4b4d4e;
    &.active:before {
      position: absolute;
      bottom: -10px;
      left: 50%;
      content: ".";
    }
  }
`;

const Header = () => (
  <SiteHeader>
    <Logo />
    <NavLink exact to="/">
      Map
    </NavLink>
    <NavLink to="/about">About</NavLink>
  </SiteHeader>
);

export default Header;

import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <header>
      <NavLinkWrapper>
        <NavLinkStyle exact to="/">
          Welcome
        </NavLinkStyle>
        <NavLinkStyle exact to="/quotes">
          Random Quotes
        </NavLinkStyle>
        <NavLinkStyle exact to="/savedquotes">
          Saved Quotes
        </NavLinkStyle>
      </NavLinkWrapper>
    </header>
  );
}

const NavLinkWrapper = styled.nav`
  display: flex;
  flex-direction: row;
`;

const NavLinkStyle = styled(NavLink)`
  font-family: monospace;
  font-size: 1.2em;
  padding: 20px;

  &:hover {
    background: blueviolet;
  }

  &.active {
    background: purple;
    color: teal;
  }
`;

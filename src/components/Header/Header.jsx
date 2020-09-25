import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledHeader = styled.header`
  height: 100px;
  display: flex;
  justify-content: center;
  background-color: #777;
`

const HeaderNav = styled.nav`
  display: flex;
`

const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-inline-start: unset;
  
  .nav-links {
    color: antiquewhite;
    margin-left: 20px;
    list-style: none;
    text-decoration: none;
  }
`

export const Header = () => {
    return (
        <StyledHeader>
            <HeaderNav>
                <NavList>
                    <NavLink className="nav-links" to="/">Home</NavLink>
                    <NavLink className="nav-links" to="#">Logo</NavLink>
                    <NavLink className="nav-links" to="#">About us</NavLink>
                </NavList>
            </HeaderNav>
        </StyledHeader>
    )
}
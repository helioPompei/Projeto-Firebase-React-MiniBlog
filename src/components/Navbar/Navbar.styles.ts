import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Navbar = styled.nav`
  background-color: ${(p) => p.theme.navColor};
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.15) 0px -2px 10px 0px;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 2em;
`;

export const BrandNavLink = styled(NavLink)`
  font-size: 1.2em;
  color: ${(p) => p.theme.secundaryColor};
  text-decoration: none;
  transition: 0.4s;

  & span {
    font-weight: 900px;
    text-transform: uppercase;
    font-weight: 800;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: ${(p) => p.theme.secundaryColor};
  text-decoration: none;
  transition: 0.4s;
  
  &.active {
    background-color: ${(p) => p.theme.secundaryColor};
    color: ${(p) => p.theme.primaryColor};
  }
`;

export const NavList = styled.div`
  display: flex;
  list-style: none;
  align-items: center;

  & a {
    margin-left: 1em;
    padding: 0.4em 0.6em;
  }
`;

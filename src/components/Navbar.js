import React, { useState } from "react";
import Navbar from "@material-tailwind/react/Navbar";
import NavbarContainer from "@material-tailwind/react/NavbarContainer";
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper";
import NavbarBrand from "@material-tailwind/react/NavbarBrand";
import NavbarToggler from "@material-tailwind/react/NavbarToggler";
import NavbarCollapse from "@material-tailwind/react/NavbarCollapse";
import Nav from "@material-tailwind/react/Nav";
import NavItem from "@material-tailwind/react/NavItem";
import { NavLink } from "react-router-dom";
import "./nav.css";
import logo from "../images/logo.png";

export default function MainNavbar() {
  const [openNavbar, setOpenNavbar] = useState(false);

  return (
    <Navbar className="bg-blue-100">
      <NavbarWrapper>
        <NavbarBrand>
          <img src={logo} className="w-48" alt="logo" />
        </NavbarBrand>
        <NavbarToggler
          color="white"
          onClick={() => setOpenNavbar(!openNavbar)}
          ripple="light"
        />
      </NavbarWrapper>

      <NavbarCollapse open={openNavbar}>
        <Nav rightSide>
          <NavLink exact to="/" className="main-nav" activeClassName="active">
            <i className="fas fa-home text-xl  cursor-pointer"></i> Home
          </NavLink>
          <NavLink
            exact
            to="/profile"
            className="main-nav"
            activeClassName="active"
          >
            <i className="fas fa-user text-xl cursor-pointer"></i> Profile
          </NavLink>

          <NavLink to="/projects" className="main-nav" activeClassName="active">
            <i className="fas fa-laptop-code text-xl  cursor-pointer"></i>{" "}
            Projects
          </NavLink>
          <NavLink
            exact
            to="/contact"
            className="main-nav"
            activeClassName="active"
          >
            <i className="fas fa-envelope-open-text text-xl  cursor-pointer"></i>{" "}
            Contact
          </NavLink>
        </Nav>
      </NavbarCollapse>
    </Navbar>
  );
}
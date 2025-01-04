// ---- Imports ----

// Styles
import './Navigation.scss';

import ThemeSwitch from "./sub_components/ThemeSwitch";

// Routing
import { NavLink } from "react-router-dom";

// Burger menu
import { Nav, Navbar } from "react-bootstrap";

// ---- Navigation ----
const Navigation = () => (
  <Navbar expand="lg" className="py-3 bg-primary" data-bs-theme="dark">
    <div className="container">
      <Navbar.Brand className="navigation-title fw-bold m-0" href="#">
        Alex Chapman
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse className="navigation-collapse" id="navbarScroll">
        <Nav className="fs-4 fw-bold ms-auto" navbarScroll>
          <NavLink className="nav-link text-center" to="/">
            About
          </NavLink>
          <NavLink className="nav-link text-center" to="/projects">
            Projects
          </NavLink>
        </Nav>
        <div className="ps-1 d-flex justify-content-end">
          <ThemeSwitch></ThemeSwitch>
        </div>
      </Navbar.Collapse>
    </div >
  </Navbar >
);

export default Navigation;

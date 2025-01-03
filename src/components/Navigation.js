// ---- Imports ----

// Styles
import './Navigation.scss';

// Routing
import { NavLink } from "react-router-dom";

// Burger menu
import { Nav, Navbar } from "react-bootstrap";

// ---- Navigation ----
const Navigation = () => (
  <Navbar expand="lg" className="bg-body-tertiary py-3">
    <div className="container">
      <Navbar.Brand className="navigation-title fw-bold text-primary m-0" href="#">
        Alex Chapman
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse className="navigation-collapse" id="navbarScroll">
        <Nav className="fs-4 fw-bold ms-auto" navbarScroll>
          <NavLink className="nav-link text-center" to="/">
            About
          </NavLink>
          <NavLink className="nav-link pe-0 text-center" to="/projects">
            Projects
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </div>
  </Navbar>
);

export default Navigation;

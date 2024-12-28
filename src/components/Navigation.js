// ---- Imports ----

// Routing
import { NavLink } from "react-router-dom";

// Burger menu
import { Nav, Navbar } from "react-bootstrap";

// ---- Navigation ----
const Navigation = () => (
  <Navbar expand="lg" className="bg-body-tertiary py-0">
    <div className="container">
      <Navbar.Brand className="fs-1 fw-bold text-primary" href="#">
        Alex Chapman
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="fs-3 ms-auto" navbarScroll>
          <NavLink className="nav-link" to="/">
            About
          </NavLink>
          <NavLink className="nav-link" to="/projects">
            Projects
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </div>
  </Navbar>
);

export default Navigation;

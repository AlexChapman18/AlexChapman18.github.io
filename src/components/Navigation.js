// ---- Imports ----

// Routing
import {NavLink} from "react-router-dom";

// Burger menu
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// ---- Navigation ----
const Navigation = () => {
  return (
    <Navbar expand="lg py-0" className="bg-body-tertiary">
      <div className="container">
        <Navbar.Brand className="fs-1 fw-bold text-primary" href="#">Alex Chapman</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="navbar-nav fs-3 ms-auto" navbarScroll>
            <NavLink className="nav-link" to="/">About</NavLink>
            <NavLink className="nav-link" to="/projects">Projects</NavLink>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Navigation
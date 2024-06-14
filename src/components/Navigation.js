// ---- Imports ----
// Styles
import './Navigation.scss';

// Routing
import {NavLink} from "react-router-dom";

// Burger menu
import Hamburger from 'hamburger-react'
import {useState} from "react";

// ---- Navigation ----
const Navigation = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <div className="container">
      <nav className="navbar">
        <div className='navbar-title-burger'>
          <h1 className="navbar-brand">Alex Chapman</h1>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <NavLink className={({ isActive }) => `navbar-links-item ${isActive ? 'active' : ''}`} to="/">About</NavLink>
          <NavLink className={({ isActive }) => `navbar-links-item ${isActive ? 'active' : ''}`} to="/projects">Projects</NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navigation
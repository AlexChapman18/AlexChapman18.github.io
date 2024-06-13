// ---- Imports ----
// Styles
import './Navigation.scss';

// Routing
import {NavLink} from "react-router-dom";

// ---- Navigation ----
const Navigation = () => {
  return (
    <div className="container">
      <div className="navbar">
        <div className="navbar-brand">Alex Chapman</div>
        <div className="navbar-links">
          <NavLink className={({ isActive }) => `navbar-links-item ${isActive ? 'active' : ''}`} to="/">About</NavLink>
          <NavLink className={({ isActive }) => `navbar-links-item ${isActive ? 'active' : ''}`} to="/projects">Projects</NavLink>
        </div>
      </div>
    </div>

  );
}

export default Navigation
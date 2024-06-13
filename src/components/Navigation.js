// Import styles
import './Navigation.scss';

// Import Router stuff
import {NavLink} from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <h1>Navigation!</h1>
      <nav>
        <NavLink className={({ isActive }) => isActive && 'active'} to="/">About</NavLink>
        <NavLink className={({ isActive }) => isActive && 'active'} to="/projects">Projects</NavLink>
      </nav>
    </>
  );
}

export default Navigation
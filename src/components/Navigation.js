import {Link} from "react-router-dom";

const Navigation = () => {
  return (
    <>
        <h1>Navigation!</h1>
        <nav>
            <ul>
                <li> <Link to="/">About</Link> </li>
                <li> <Link to="/projects">Projects</Link> </li>
            </ul>
        </nav>
    </>
  );
}

export default Navigation
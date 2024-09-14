import { Link } from "react-router-dom";
import { useDentistStates } from "../utils/Context";
import { routes } from "../utils/routes";
import "../Styles/navbar.css";

const Navbar = () => {
  const { state, dispatch } = useDentistStates();

  const handleThemeToggle = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <nav className={`navbar ${state.theme}`}>
      <div className="logo">
        <h1>DH Odonto</h1>
      </div>
      <ul className="nav-links" style={{ marginLeft: 'auto' }}>
        <li>
          <Link to={routes.home}>Home</Link>
        </li>
        <li>
          <Link to={routes.contact}>Contact</Link>
        </li>
        <li>
          <Link to={routes.favs}>Favs</Link>
        </li>
        <button className="theme-toggle" onClick={handleThemeToggle}>
          {state.theme === "light" ? "🌙" : "☀️"}
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;

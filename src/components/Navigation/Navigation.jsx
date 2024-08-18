import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

function Navigation() {
  const addActive = ({ isActive }) => (isActive ? s.active : s.link);

  return (
    <nav className={s.navBox}>
      <NavLink className={addActive} to="/">
        Home
      </NavLink>
      <NavLink className={addActive} to="/movies">
        Movies
      </NavLink>
    </nav>
  );
}

export default Navigation;

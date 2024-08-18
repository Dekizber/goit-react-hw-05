import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="flex pt-2 pb-2 justify-center  text-lg shadow-orange-400 ">
      <ul className="flex justify-between gap-4">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;

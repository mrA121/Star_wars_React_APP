import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../../Store/action/action";

function NavBar() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(signOut());
  };

  return (
    <nav className="nav-wrapper blue darken-3">
      <div className="container">
        <div className="brand-logo">Star Wars Planet Searcher!</div>
        <ul className="right">
          <li>
            {user ? (
              <NavLink to="/" onClick={handleLogOut}>
                Sign Out
              </NavLink>
            ) : (
              <NavLink to="/">Sign In</NavLink>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function Navigation() {
  return (
    <div className="navigation">
      <Logo />
      <ul>
        <li>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            second page
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;

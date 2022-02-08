import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="cont-navbar">
      <NavLink className="link" to="/" exact>
        <span className="text">Track</span>
        <span className="world" aria-label="world" role="img">
          🌎
        </span>
        me
      </NavLink>
      <NavLink className="link" to="/about" exact>
        About
      </NavLink>
    </div>
  );
};

export default Navbar;

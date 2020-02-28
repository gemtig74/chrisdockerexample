import React from "react";
import {
  Link,
  NavLink
} from "react-router-dom";

export default function Navigation() {
  return (
  <div>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand text-warning" to="/home">
            React Router Example 
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-item nav-link" activeClassName="active" to="/home">
                Home 
              </NavLink>
              <NavLink className="nav-item nav-link" activeClassName="active" to="/about">
                About
              </NavLink>
              <NavLink className="nav-item nav-link" activeClassName="active" to="/dashboard">
                Dashboard
              </NavLink>
            </div>
          </div>
        </nav>
        <hr />
  </div>
  );
}

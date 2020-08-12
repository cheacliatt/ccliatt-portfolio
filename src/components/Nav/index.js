import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/home">
        Chea Cliatt
      </Link>
      <button
        className="navbar-toggler custom-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon custom-toggler"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active ml-auto">
            <Link className="nav-link" to="/home">
              Home
            </Link>
          </li>
          <li className="nav-item ml-auto">
            <Link className="nav-link" to="/contact">
              Contact Me
            </Link>
          </li>
          <li className="nav-item ml-auto">
            <Link className="nav-link" to="/portfolio">
              Portfolio <span className="sr-only">(current)</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;

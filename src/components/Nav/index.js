import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="index.html">
        Chea Cliatt
      </a>
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
            <a className="nav-link" href="/home">
              Home
            </a>
          </li>
          <li className="nav-item ml-auto">
            <a className="nav-link" href="contact.html">
              Contact Me
            </a>
          </li>
          <li className="nav-item ml-auto">
            <a className="nav-link" href="portfolio.html">
              Portfolio <span className="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;

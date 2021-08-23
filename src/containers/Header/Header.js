import React from "react";
import "./Header.scss";

function Header(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light header">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  Camera 360
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  Map Camera
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  Person
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  Traffic
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  Violation
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  User
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;

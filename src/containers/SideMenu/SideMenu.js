import React from "react";
import "./SideMenu.scss";
import logo from "../../images/logo.png";
import user from "../../assets/images/user.svg";

function SideMenu(props) {
  return (
    <div className="side-menu">
      <div className="top-section">
        <div className="logo">
          <img src={logo} alt="qtsc" />
        </div>
        <div className="toggle-menu-btn">
          <i className="fas fa-arrow-left"></i>
        </div>
      </div>
      <div className="main-menu">
        <ul>
          <li>
            <a className="menu-item active" href="/#">
              <div className="menu-icon">
                <i className="fas fa-th-large fa-2x"></i>
              </div>
              <div className="menu-label">Overview</div>
            </a>
          </li>
          <li>
            <a className="menu-item" href="/#">
              <div className="menu-icon">
                <i className="far fa-map fa-2x"></i>
              </div>
              <div className="menu-label">Map</div>
            </a>
          </li>
          <li>
            <a className="menu-item" href="/#">
              <div className="menu-icon">
                <i className="far fa-list-alt fa-2x"></i>
              </div>
              <div className="menu-label">LogBook</div>
            </a>
          </li>
          <li>
            <a className="menu-item" href="/#">
              <div className="menu-icon">
                <i className="fas fa-history fa-2x"></i>
              </div>
              <div className="menu-label">History</div>
            </a>
          </li>
          <li>
            <a className="menu-item" href="/#">
              <div className="menu-icon">
                <i className="fas fa-edit fa-2x"></i>
              </div>
              <div className="menu-label">File Edittor</div>
            </a>
          </li>
          <li>
            <a className="menu-item" href="/#">
              <div className="menu-icon">
                <i className="fas fa-eye fa-2x"></i>
              </div>
              <div className="menu-label">Glances</div>
            </a>
          </li>
          <li>
            <a className="menu-item" href="/#">
              <div className="menu-icon">
                <i className="fas fa-chart-pie fa-2x"></i>
              </div>
              <div className="menu-label">InfluxDB</div>
            </a>
          </li>
          <li>
            <a className="menu-item" href="/#">
              <div className="menu-icon">
                <i className="far fa-sticky-note fa-2x"></i>
              </div>
              <div className="menu-label">Log Viewer</div>
            </a>
          </li>
          <li>
            <a className="menu-item" href="/#">
              <div className="menu-icon">
                <i className="fas fa-photo-video fa-2x"></i>
              </div>
              <div className="menu-label">Media Browser</div>
            </a>
          </li>
          <li>
            <a className="menu-item" href="/#">
              <div className="menu-icon">
                <i className="fas fa-video fa-2x"></i>
              </div>
              <div className="menu-label">Motion Eye</div>
            </a>
          </li>
        </ul>
      </div>
      <div className="side-menu-footer">
        <div className="avatar">
          <img src={user} alt="user" />
        </div>
        <div className="user-info">
          <h5>firstName LastName</h5>
          <p>Role</p>
        </div>
        <div className="btn btn-logout">
          <i className="fas fa-sign-out-alt iconLogout"></i>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;

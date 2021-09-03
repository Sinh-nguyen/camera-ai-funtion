import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import { PAGE_ROUTES } from "../../utils/constant";
import HomePage from "../System/HomePage/HomePage";
import NotFoundPage from "../System/NotFoundPage/NotFoundPage";
import UserPage from "../System/UserPage/UserPage";
import "./Header.scss";

function Header() {
  const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
      <Route
        path={to}
        exact={activeOnlyWhenExact}
        children={({ match }) => {
          var active = match ? "active" : "";
          return (
            <li className={active}>
              <NavLink className="nav-link" exact to={to}>
                {label}
              </NavLink>
            </li>
          );
        }}
      />
    );
  };
  const showMenus = (menus) => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            label={menu.name}
            to={menu.path}
            activeOnlyWhenExact={menu.exact}
          />
        );
      });
    }
    return result;
  };
  return (
    <div className="page-header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light header">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">{showMenus(PAGE_ROUTES)}</ul>
          </div>
        </div>
      </nav>
      <Switch>
        <Route path="/system" exact component={HomePage} />
        <Route path="/system/user-manage" component={UserPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default Header;

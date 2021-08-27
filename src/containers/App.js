// import './App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../routes/Home";
import Login from "../containers/Auth/Login";
import System from "../routes/System";
import "./App.scss";
import Header from "./Header/Header";
import SideMenu from "./SideMenu/SideMenu";
import { path } from "../utils";
import { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { history } from "../redux";
import {
  userIsAuthenticated,
  userIsNotAuthenticated,
} from "../hoc/authentication";

function App() {
  const isLoggedIn = useSelector(state=>state.user.isLoggedIn)
  return (
    <Fragment>
      <Router history={history}>
        <div className="main-container">
          {isLoggedIn && <SideMenu />}
          {isLoggedIn && <Header />}
          <div className="content-container">
            <Switch>
              <Route path={path.HOME} exact component={Home} />
              <Route path={path.LOGIN} component={userIsNotAuthenticated(Login)} />
              <Route path={path.SYSTEM} component={userIsAuthenticated(System)} />
            </Switch>
          </div>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;

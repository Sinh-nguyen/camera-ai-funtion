import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./containers/App";
import reduxStore, { persistor } from './redux';
import * as serviceWorker from "./serviceWorker";
import "./styles/styles.scss";

ReactDOM.render(
  <Provider store={reduxStore}>
    <React.StrictMode>
      <App persistor={persistor}/>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();

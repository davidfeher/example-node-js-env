// 3rd party libs
import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "./redux/configureStore";

// project imports
import App from "./components/App";

// styles
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

const store = configureStore();

render(
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>,
  document.getElementById("root")
);

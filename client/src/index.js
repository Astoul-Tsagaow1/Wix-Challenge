import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import React from "react";
import ReactDOM from "react-dom";
// import './app.css'
import App from "./App";

import * as serviceWorker from "./serviceWorker";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#4267B2",
    },
    secondary: {
      main: "#DB4437",
    },
  },
});
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

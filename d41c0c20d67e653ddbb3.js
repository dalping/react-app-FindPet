import React from "react";
import ReactDOM from "react-dom";
import App from "./src/App";
import theme from "./src/assets/style/theme";
import GlobalStyle from "./src/assets/style/global";
import { ThemeProvider } from "styled-components";
ReactDOM.render(
  React.createElement(
    ThemeProvider,
    { theme },
    React.createElement(GlobalStyle, null),
    React.createElement(App, null)
  ),
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import App from "./src/App";
import theme from "./src/assets/style/theme";
import GlobalStyle from "./src/assets/style/global";
import { ThemeProvider } from "styled-components";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

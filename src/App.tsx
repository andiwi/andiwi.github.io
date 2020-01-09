import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

import Home from "./pages/Home";
import Impressum from "./pages/Impressum";
import ScrollToTop from "./components/ScrollToTop";
import theme from "./theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route path="/impressum">
            <Impressum />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <ScrollToTop />
      </Router>
    </ThemeProvider>
  );
}

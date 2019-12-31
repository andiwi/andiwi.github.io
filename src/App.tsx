import React from "react";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

import ContactContainer from "./components/ContactContainer";
import LandingPageContainer from "./components/LandingPageContainer";
import theme from "./theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LandingPageContainer />
      <ContactContainer />
    </ThemeProvider>
  );
}

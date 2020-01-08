import React from "react";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

import ContactContainer from "./components/ContactContainer";
import LandingPageContainer from "./components/LandingPageContainer";
import AboutMeContainer from "./components/AboutMeContainer";
import TechstackContainer from "./components/TechstackContainer";
import ServicesContainer from "./components/ServicesContainer";
import theme from "./theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LandingPageContainer />
      <AboutMeContainer />
      <TechstackContainer />
      <ServicesContainer />
      <ContactContainer />
    </ThemeProvider>
  );
}

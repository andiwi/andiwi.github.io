import React from "react";

import ContactContainer from "../components/ContactContainer";
import LandingPageContainer from "../components/LandingPageContainer";
import AboutMeContainer from "../components/AboutMeContainer";
import TechstackContainer from "../components/TechstackContainer";
import ProcessContainer from "../components/ProcessContainer";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <LandingPageContainer />
      <AboutMeContainer />
      <TechstackContainer />
      <ProcessContainer />
      <ContactContainer />
      <Footer />
    </>
  );
}

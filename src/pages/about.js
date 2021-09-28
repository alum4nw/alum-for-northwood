import * as React from "react";
import PageLayout from "../components/PageLayout.js";
import AboutALUM from "../components/AboutALUM.js";
import Team from "../components/Team.js";

const AboutPage = () => {
  return (
    <PageLayout pageTitle="About">
      <AboutALUM />
      <Team />
    </PageLayout>
  );
};

export default AboutPage;

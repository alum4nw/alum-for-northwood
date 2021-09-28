import * as React from "react";
import MenteeSpotlight from "../components/MenteeSpotlight.js";
import PageLayout from "../components/PageLayout.js";
import PathwayOverview from "../components/PathwayOverview.js";
import ProgramHeader from "../components/ProgramHeader.js";

const ProgramPage = () => {
  return (
    <PageLayout pageTitle="Program">
      <ProgramHeader />
      <PathwayOverview />
      <MenteeSpotlight />
    </PageLayout>
  );
};

export default ProgramPage;

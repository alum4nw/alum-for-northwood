import * as React from "react";
import Layout from "../components/Layout.js";
import Hero from "../components/Hero.js";
import Mission from "../components/Mission.js";
import UpcomingEvents from "../components/UpcomingEvents.js";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <Hero />
      <Mission />
      <UpcomingEvents />
    </Layout>
  );
};

export default IndexPage;

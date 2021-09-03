import * as React from "react";
import Hero from "../components/Hero.js";
import Layout from "../components/Layout.js";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <Hero></Hero>
    </Layout>
  );
};

export default IndexPage;

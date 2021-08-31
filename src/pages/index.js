import * as React from "react";
import Layout from "../components/Layout.js";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <p>Static Image</p>
      <StaticImage alt="49ers" src="../images/seat-image.png" />
    </Layout>
  );
};

export default IndexPage;

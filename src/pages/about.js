import * as React from "react";
import PageLayout from "../components/PageLayout.js";
import AboutALUM from "../components/AboutALUM.js";
import Team from "../components/Team.js";
import { graphql } from "gatsby";

const AboutPage = ({ data }) => {
  return (
    <PageLayout pageTitle="About">
      <AboutALUM />
      <Team data={data} />
    </PageLayout>
  );
};

export default AboutPage;

export const teamQuery = graphql`
  query TeamMembers {
    allContentfulTeamMember(
      sort: { fields: profilePicture___createdAt, order: ASC }
    ) {
      edges {
        node {
          name
          title
          profilePicture {
            gatsbyImageData(width: 200)
          }
        }
      }
    }
  }
`;

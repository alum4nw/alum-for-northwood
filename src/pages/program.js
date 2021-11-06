import * as React from "react";
import MenteeSpotlight from "../components/MenteeSpotlight.js";
import PageLayout from "../components/PageLayout.js";
import PathwayOverview from "../components/PathwayOverview.js";
import ProgramHeader from "../components/ProgramHeader.js";
import { graphql } from "gatsby";

const ProgramPage = ({ data }) => {
  return (
    <PageLayout pageTitle="Program" bgColor="bg-blue-lightest">
      <ProgramHeader />
      <PathwayOverview data={data} />
      <MenteeSpotlight />
    </PageLayout>
  );
};

export default ProgramPage;

export const pathwayQuery = graphql`
  query Pathways {
    allContentfulPathway(sort: { fields: photo___createdAt, order: ASC }) {
      edges {
        node {
          photo {
            file {
              url
            }
          }
          name
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;

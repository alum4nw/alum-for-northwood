import * as React from "react";
import { graphql } from "gatsby";
import BlogPreview from "../components/BlogPreview.js";
import PageLayout from "../components/PageLayout.js";
import { getImage } from "gatsby-plugin-image";

const BlogPage = ({ data }) => {
  return (
    <PageLayout pageTitle="Blog">
      <div className="bg-white pt-16 pb-10">
        <h2 className="font-header text-h2 text-center">Mentor Blog</h2>
        <div className="justify-center items-center flex flex-col">
          {data.allContentfulBlogPost.edges.map(({ node }) => (
            <BlogPreview
              title={node.title}
              image={getImage(node.photo)}
              preview={node.preview.preview}
              author={node.author}
              date={node.date}
            />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default BlogPage;

export const query = graphql`
  query MyQuery {
    allContentfulBlogPost {
      edges {
        node {
          preview {
            preview
          }
          author
          date(formatString: "MMMM DD, YYYY")
          title
          photo {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

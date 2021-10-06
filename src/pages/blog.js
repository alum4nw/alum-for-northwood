import * as React from "react";
import { Link, graphql } from "gatsby";
import PageLayout from "../components/PageLayout.js";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogPage = ({ data }) => {
  return (
    <PageLayout pageTitle="Blog">
      <div className="bg-white pt-16 pb-10">
        <h2 className="font-header text-h2 text-center">Mentor Blog</h2>
        <div className="justify-center items-center flex flex-col">
          {data.allContentfulBlogPost.edges.map(({ node }) => (
            <Link
              to={`/blog/${node.slug}/`}
              className="flex flex-row w-2/3 xl:items-center py-10 border-b last:border-b-0 group"
            >
              <GatsbyImage image={getImage(node.photo)} alt={node.slug} />
              <div className="flex flex-col pl-10">
                <h3 className="font-header text-h3 text-blue-dark group-hover:text-blue">
                  {node.title}
                </h3>
                <p className="text-body font-body py-5">
                  {node.preview.preview}
                </p>
                <p className="text-body font-body font-bold">
                  Written by {node.author} • {node.date}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default BlogPage;

export const blogQuery = graphql`
  query BlogPosts {
    allContentfulBlogPost(sort: { fields: date, order: DESC }) {
      edges {
        node {
          preview {
            preview
          }
          author
          date(formatString: "MMMM DD, YYYY")
          title
          photo {
            gatsbyImageData(width: 740)
          }
          slug
        }
      }
    }
  }
`;

import * as React from "react";
import { Link, graphql } from "gatsby";
import PageLayout from "../components/PageLayout.js";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogPage = ({ data }) => {
  const BlogPreview = ({ node }) => {
    return (
      <div className="py-10 border-b last:border-b-0 group w-4/5">
        <Link to={`/blog/${node.slug}/`}>
          <div className="grid grid-cols-1 place-content-center">
            <GatsbyImage image={getImage(node.photo)} alt={node.slug} />
            <h3 className="font-header text-mh3 pt-5 md:text-h3 text-blue-dark group-hover:text-blue">
              {node.title}
            </h3>
            <p className="text-body font-body py-5">{node.preview.preview}</p>
            <p className="text-body font-body font-bold">
              Written by {node.author}{" "}
              <span className="hidden md:block">•</span>
              <br className="md:hidden" /> {node.date}
            </p>
          </div>
        </Link>
      </div>
    );
  };

  return (
    <PageLayout pageTitle="Blog">
      <div className="bg-white pt-10 md:pt-16">
        <h2 className="font-header text-mh2 md:text-h2 text-center">
          Mentor Blog
        </h2>
        <div className="justify-center items-center flex flex-col">
          {data.allContentfulBlogPost.edges.map(({ node }) => (
            <BlogPreview node={node} />
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

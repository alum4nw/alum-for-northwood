import * as React from "react";
import { Link, graphql } from "gatsby";
import PageLayout from "../components/PageLayout.js";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogPage = ({ data }) => {
  const BlogPreview = ({ node }) => {
    return (
      <div className="py-10 border-b last:border-b-0 group px-10">
        <Link to={`/blog/${node.slug}/`}>
          <div className="grid grid-cols-1 md:grid-cols-2 place-content-center place-items-center lg:gap-x-7">
            <GatsbyImage
              image={getImage(node.photo)}
              alt={node.slug}
              className="w-80 h-72 lg:w-auto lg:max-w-md lg:h-96"
            />
            <div className="flex flex-col justify-center max-w-sm md:w-auto md:max-w-md lg:max-w-xl">
              <h3 className="font-header text-mh3 pt-5 md:pt-0 lg:text-h3 text-blue-dark group-hover:text-blue">
                {node.title}
              </h3>
              <p className="text-body font-body md:text-tbody lg:text-body py-5">
                {node.preview.preview}
              </p>
              <p className="text-body font-body md:text-tbody lg:text-body font-medium">
                Written by {node.author}{" "}
                <span className="hidden md:inline">•</span>
                <br className="md:hidden" /> {node.date}
              </p>
            </div>
          </div>
        </Link>
      </div>
    );
  };

  return (
    <PageLayout pageTitle="Blog" bgColor="bg-white">
      <div className="bg-white pt-10 md:pt-16">
        <h2 className="font-header text-mh2 lg:text-h2 text-center">
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

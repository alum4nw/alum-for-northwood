import * as React from "react";
import { graphql } from "gatsby";
import PageLayout from "../components/PageLayout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogPostTemplate = ({ data }) => {
  const post = data.contentfulBlogPost;
  return (
    <PageLayout pageTitle="Blog Post">
      <div className="bg-white">
        <div className="w-1/2">
          <h2 className="font-header text-h2 text-center">{post.title}</h2>
          <GatsbyImage image={getImage(post.photo)} alt={post.slug} />
          <p className="text-body font-body font-bold">
            Written by {post.author} • {post.date}
          </p>
          <p className="text-body font-body">{post.content.content}</p>
        </div>
      </div>
    </PageLayout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      author
      title
      content {
        content
      }
      date(formatString: "MMMM DD, YYYY")
      photo {
        gatsbyImageData(width: 740)
      }
      slug
    }
  }
`;

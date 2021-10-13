import * as React from "react";
import { graphql } from "gatsby";
import PageLayout from "../components/PageLayout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogPostTemplate = ({ data }) => {
  const post = data.contentfulBlogPost;
  const htmlContent = post.content.childMarkdownRemark.html.replace(
    /\n/g,
    "<br>"
  );
  return (
    <PageLayout pageTitle="Blog Post" className="bg-white">
      <div className="py-10 flex flex-col items-center justify-center mx-auto w-4/5 md:w-1/2">
        <h2 className="font-header text-mh2 md:text-h2 text-center">
          {post.title}
        </h2>
        <div className="pt-8 pb-6">
          <GatsbyImage image={getImage(post.photo)} alt={post.slug} />
        </div>
        <p className="text-body font-body font-bold hidden md:block">
          Written by {post.author} • {post.date}
        </p>
        <div
          className="text-body font-body"
          dangerouslySetInnerHTML={{
            __html: htmlContent,
          }}
        />
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
        childMarkdownRemark {
          html
        }
      }
      date(formatString: "MMMM DD, YYYY")
      photo {
        gatsbyImageData(width: 740)
      }
      slug
    }
  }
`;

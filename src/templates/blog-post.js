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
    <PageLayout pageTitle="Blog Post" bgColor="bg-white">
      <div className="bg-white">
        <div className="py-10 flex flex-col w-80 md:w-auto md:max-w-xl mx-auto lg:max-w-2xl">
          <h2 className="font-header text-mh2 lg:text-h2 text-center ">
            {post.title}
          </h2>
          <div className="pt-8 pb-6">
            <GatsbyImage
              image={getImage(post.photo)}
              alt={post.slug}
              className="w-80 h-72 md:w-auto md:max-w-xl md:h-auto md:max-h-blog lg:max-w-2xl lg:max-h-full"
            />
          </div>
          <p className="text-tbody font-body lg:text-body hidden md:block md:border-b md:pb-4">
            Written by {post.author}
            <br />
            {post.date} • {post.content.childMarkdownRemark.timeToRead} min read
          </p>
          <div
            className="text-body font-body md:text-tbody lg:text-body md:pt-4"
            dangerouslySetInnerHTML={{
              __html: htmlContent,
            }}
          />
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
        childMarkdownRemark {
          html
          timeToRead
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

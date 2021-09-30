import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const BlogPreview = ({ title, image, preview, author, date }) => {
  return (
    <div className="flex flex-row w-2/3 xl:items-center py-10 border-b last:border-b-0">
      <GatsbyImage image={image} alt="img-alt" />
      <div className="flex flex-col pl-10">
        <h3 className="font-header text-h3 text-blue-dark">{title}</h3>
        <p className="text-body font-body py-5">{preview}</p>
        <p className="text-body font-body font-bold">
          Written by {author} • {date}
        </p>
      </div>
    </div>
  );
};

export default BlogPreview;

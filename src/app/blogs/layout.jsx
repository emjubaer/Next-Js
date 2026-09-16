import React, { Children } from "react";

const BlogLayouts = ({ children }) => {
  return (
    <div>
      <p>fixed section</p>

      <div> {children} </div>
    </div>
  );
};

export default BlogLayouts;

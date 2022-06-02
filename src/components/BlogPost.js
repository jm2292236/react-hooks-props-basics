import React from "react";
import BlogContent from "./BlogContent";

function BlogPost() {
  return (
    <div id="blog-post">
        <BlogContent 
            articleText="Dear Reader: Bjarne Stroustrup has the perfect lecture oration."
            isPublished = {true}
            minutesToRead = {1}
        />
    </div>
  );
}

export default BlogPost;

import React from "react";

function BlogCard({ blog }) {
  return (
    <div className="blog-card">

      <div className="blog-image">
        <img
          src={blog.img}
          alt={blog.title}
          loading="lazy"
        />
      </div>

      <div className="blog-content">
        <h3>{blog.title}</h3>

        <p>{blog.content}</p>

        <span className="read-more">
          Read More →
        </span>
      </div>

    </div>
  );
}

export default BlogCard;

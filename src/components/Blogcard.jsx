import React from "react";
import { useNavigate } from "react-router-dom";

function BlogCard({ blog }) {
  const navigate = useNavigate();

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

        <button
          className="read-more"
          onClick={() => navigate(`/blog/${blog.id}`)}
        >
          Read More →
        </button>
      </div>

    </div>
  );
}

export default BlogCard;

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import blogs from "../data/blogsData";

function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const blog = blogs.find(
    (item) => item.id === Number(id)
  );

  if (!blog) {
    return (
      <div className="blog-not-found">
        <h2>Blog Not Found</h2>
        <button onClick={() => navigate("/")}>
          Back to Blogs
        </button>
      </div>
    );
  }

  return (
    <div className="blog-details">

      <button
        className="back-button"
        onClick={() => navigate(-1)}
      >
        ← Back to Blogs
      </button>

      <img
        src={blog.img}
        alt={blog.title}
        className="details-image"
      />

      <div className="details-content">
        <span className="details-domain">
          {blog.domain}
        </span>

        <h1>{blog.title}</h1>

        <p>{blog.content}</p>
      </div>

    </div>
  );
}

export default BlogDetails;

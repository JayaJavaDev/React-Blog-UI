import React from "react";
import blogs from "../data/blogsData";
import BlogCard from "./Blogcard";

function AI() {
  const filteredBlogs = blogs.filter(
    (blog) => blog.domain === "AI"
  );

  return (
    <section className="blog-section">
      <div className="blog-grid">
        {filteredBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
}

export default AI;
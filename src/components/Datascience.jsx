import React from "react";
import blogs from "../data/blogsData";
import Blogcard from "./Blogcard";

function DataScience() {
  const filteredBlogs = blogs.filter(
    (blog) => blog.domain === "Data Science"
  );

  return (
    <section className="blog-section">
      <div className="blog-grid">
        {filteredBlogs.map((blog) => (
          <Blogcard
            key={blog.id}
            blog={blog}
          />
        ))}
      </div>
    </section>
  );
}

export default DataScience;

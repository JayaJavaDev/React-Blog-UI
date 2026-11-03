import React from "react";
import blogs from "../data/blogsData";
import Blogcard from "./Blogcard";

function All() {
  return (
    <section className="blog-section">
      <div className="blog-grid">
        {blogs.map((blog) => (
          <Blogcard
            key={blog.id}
            blog={blog}
          />
        ))}
      </div>
    </section>
  );
}

export default All;

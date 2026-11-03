import React from "react";
import blogs from "../data/blogsData";
import Blogcard from "./Blogcard";

function CyberSecurity() {
  const filteredBlogs = blogs.filter(
    (blog) => blog.domain === "Cyber Security"
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

export default CyberSecurity;

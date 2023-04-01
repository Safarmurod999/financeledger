import React from "react";
import "./BlogPost.css";

function BlogPost() {
  return (
    <section id="blogpost">
      <div className="left">
       <div className="left-content">
       <div className="left-top">April 16 2020</div>
        <div className="left-title">Blog Post One</div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </p>
        <button className="blogpost-button">
          Read Our Blog
        </button>
       </div>
      </div>
      <div className="right">
      </div>
    </section>
  );
}

export default BlogPost;

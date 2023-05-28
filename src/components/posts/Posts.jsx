import React from "react";
import './Posts.css';
import Post from "./post/Post";


const Posts = () => {
  return (
    <section className="posts-section">
      <div className="posts-content container">
        <h2>Publicaciones</h2>
        <Post />
      </div>
    </section>
  );
};

export default Posts;

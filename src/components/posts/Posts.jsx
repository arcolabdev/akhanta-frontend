import React, { useContext } from "react";
import './Posts.css';
import { Context } from "../../Context";
import PostCard from "./postCard/PostCard";





const Posts = () => {

  const { data } = useContext(Context)

  return (
    <section className="posts-section">
      <div className="posts-content container">
        <h2>Publicaciones</h2>
        {data.map((post) => (
         <PostCard key={post.id} post={post} />
        ))}
        
      </div>
    </section>
  );
};

export default Posts;

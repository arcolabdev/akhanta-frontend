import React from "react";
import "./Post.css";


const Post = () => {
  return (
    <div className="parent">
    <div className="div1">
      <div className="image-container">
        <img src='https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8eW9nYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' alt="imagen-publicación"/>
      </div>
      <div className="description-container">
      <div className="description">
        <h3>Título publicación</h3>
        <p>Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit, sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua...</p>
        <p className="link">Ver mas</p>
      </div>
      </div>
    </div>
    <div className="div2">
        <div className="image-div">
          <h3 className="title">Título imagen 2</h3>
          <img src='https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8eW9nYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' alt="imagen-publicación"/>
        </div>
      </div>
      <div className="div3">
        <div className="image-div">
          <h3 className="title">Título imagen 3</h3>
          <img src='https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8eW9nYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' alt="imagen-publicación"/>
        </div>
      </div>
      <div className="div4">
        <div className="image-div">
          <h3 className="title">Título imagen 4</h3>
          <img src='https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8eW9nYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' alt="imagen-publicación"/>
        </div>
      </div>
  </div>
  
  );
};

export default Post;

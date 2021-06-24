import React from "react";
import style from "./Myposts.module.css";
import Post from "./Post/Post";

const Myposts = (props) => {
  // let postsData = [
  //   {id: 1, message: "Hello. how are you?", likesCount: 16},
  //   {id: 2, message: "Hello. It's my first post.", likesCount: 2}
  // ];

  let newPostElement = React.createRef();

  const addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  }
 
  let postsElements = 
    props.postsData.map( posts => <Post message={posts.message} like={posts.likesCount}/> );

  return (      
      <div className={style['profile__posts']}>
        <h2 className={style['posts__title']}>My post</h2>
        <form className={style['posts__new-post']}>
          <textarea ref={ newPostElement } placeholder="your news..."></textarea>
          <button onClick={ addPost }>Send</button>
        </form>
        <div className={style['posts__old-posts']}>         
          {postsElements}
        </div>
      </div>
  );
}

export default Myposts;
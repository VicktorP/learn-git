import style from "./Post.module.css";

const Post = (props) => {
  return (
      <div className={`${style['old-posts__my-post']} ${style.item}`}>
        <img className={style['old-posts__img']} src="https://i.redd.it/dh5otp8kcf741.png" />
        {props.message}
        <div>
          <span>likes</span> {props.like}
        </div>
      </div>
  );
}

export default Post;
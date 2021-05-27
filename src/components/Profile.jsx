import style from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={style.content}>
      <div className={style['content__main-img-wrap']}>
        <img className={style['content__main-img']} src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="Timage"/>
      </div>
      <div className={style['content__ava']}>
        <img className={style['ava__img']} src="https://pngimg.com/uploads/alien/alien_PNG21.png" alt="Timage"/>
        <p className={style['ava__desc']}>here is description</p>
      </div>
      <div className={style['content__posts']}>
        <h2 className={style['posts__title']}>My post</h2>
        <form className={style['posts__new-post']}>
          <textarea placeholder="your news..."></textarea>
          <button>Send</button>
        </form>
        <div className={style['posts__old-posts']}>
          <p className={`${style['old-posts__my-post']} ${style.item}`}>post 1</p>
          <p className={`${style['old-posts__my-post']} ${style.item}`}>post 2</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
import style from "./Profile.module.css";
import Myposts from "./Myposts/Myposts";

const Profile = (props) => {

  // let postsData = [
  //   {id: 1, message: "Hello. how are you?", likesCount: 16},
  //   {id: 2, message: "Hello. It's my first post.", likesCount: 2}
  // ];

  return (
    <div className={style.profile}>
      <div className={style['profile__main-img-wrap']}>
        <img className={style['profile__main-img']} src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="Timage"/>
      </div>
      <div className={style['profile__ava']}>
        <img className={style['ava__img']} src="https://pngimg.com/uploads/alien/alien_PNG21.png" alt="Timage"/>
        <p className={style['ava__desc']}>here is description</p>
      </div>
      <Myposts postsData={props.state.postsData} addPost={props.addPost}/>
    </div>
  );
}

export default Profile;
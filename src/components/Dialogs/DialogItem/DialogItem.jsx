import { NavLink } from "react-router-dom";
import style from "./DialogItem.module.css";

const DialogItem = (props) => {
  // let path = '/dialogs/' + props.name.replace(/\s+/g, '').toLowerCase();
  let path = '/dialogs/' + props.id;
  return (
    <div className={style.dialogItem__user}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
}

export default DialogItem;
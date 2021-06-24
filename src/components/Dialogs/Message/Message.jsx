import style from "./Message.module.css";

const Message = (props) => {
  return (
    <div className={style['message__message-item']}>{props.message}</div>
  );
}

export default Message;
// import { NavLink } from "react-router-dom";
import style from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {

  // let dialogsData = [
  //   {id: 1, name: "Viktor"},
  //   {id: 2, name: "Rodya"},
  //   {id: 3, name: "Andrew"},
  //   {id: 4, name: "Anna"},
  //   {id: 5, name: "User 5"},
  //   {id: 6, name: "User 6"},
  //   {id: 7, name: "User 7"}
  // ];

  let dialogsElements = props.state.dialogsData
    .map( dialog => <DialogItem name={dialog.name} id={dialog.id} /> );

  // let messagesData = [
  //   {id: 1, message: "Hi."},
  //   {id: 2, message: "How are you?"},
  //   {id: 3, message: "Yo!"},
  //   {id: 4, message: "Yo!"},
  //   {id: 5, message: "Yo!"}
  // ];
  
  let messagesElements = props.state.messagesData
    .map( (messageEl) => <Message message={messageEl.message} />);

  return (
    <div className={style.dialogs}>
      <div className={style.dialogs__list}>
        {dialogsElements}
      </div>    
      <div className={style.dialogs__messages}>
        {messagesElements}
      </div>
    </div>
  );
}

export default Dialogs;
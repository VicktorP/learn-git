// import logo from './logo.svg';
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


const App = (props) => {

  // let postsData = [
  //   {id: 1, message: "Hello. how are you?", likesCount: 16},
  //   {id: 2, message: "Hello. It's my first post.", likesCount: 2}
  // ];

  // let dialogsData = [
  //   {id: 1, name: "Viktor"},
  //   {id: 2, name: "Rodya"},
  //   {id: 3, name: "Andrew"},
  //   {id: 4, name: "Anna"},
  //   {id: 5, name: "User 5"},
  //   {id: 6, name: "User 6"},
  //   {id: 7, name: "User 7"}
  // ];

  // let messagesData = [
  //   {id: 1, message: "Hi."},
  //   {id: 2, message: "How are you?"},
  //   {id: 3, message: "Yo!"},
  //   {id: 4, message: "Yo!"},
  //   {id: 5, message: "Yo!"}
  // ];

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          {/* <Route path='/profile' component={Profile} />
          <Route path='/dialogs' component={Dialogs} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} /> */}

          <Route path='/profile' render={ () => <Profile state={props.state.profilePage} addPost={props.addPost}/> } />
          <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogsPage} /> } />
          <Route path='/news' render={ () => <News /> } />
          <Route path='/music' render={ () => <Music /> } />
          <Route path='/settings' render={ () => <Settings /> } />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
                                                                                                                //  f

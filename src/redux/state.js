let state = {
  profilePage : {
    postsData : [
      {id: 1, message: "Hello. how are you?", likesCount: 16},
      {id: 2, message: "Hello. It's my first post.", likesCount: 2}
    ]
  },
  dialogsPage : {
    dialogsData : [
      {id: 1, name: "Viktor"},
      {id: 2, name: "Rodya"},
      {id: 3, name: "Andrew"},
      {id: 4, name: "Anna"},
      {id: 5, name: "User 5"},
      {id: 6, name: "User 6"},
      {id: 7, name: "User 7"}
    ],
    messagesData : [
      {id: 1, message: "Hi."},
      {id: 2, message: "How are you?"},
      {id: 3, message: "Yo!"},
      {id: 4, message: "Yo!"},
      {id: 5, message: "Yo!"}
    ]
  }  
};

export const addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0
  };
  state.profilePage.postsData.push(newPost);
};

export default state;
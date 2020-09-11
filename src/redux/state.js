import img from './img/log.png';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11},
            ],
            newPostText: 'it'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Мишаня'},
                {id: 2, name: 'Анжелика'},
                {id: 3, name: 'Леха'},
                {id: 4, name: 'Даня'},
                {id: 5, name: 'Света'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id:2, message: 'How is your it-kamasutra?'},
                {id:3, message: 'Yo'},
                {id:4, message: 'Yo'},
                {id:5, message: 'Yo'},
            ],
            newMessageText: 'hi'
        },
        sidebar: {
            friends: [
                {img: img},
                {img: img},
                {img: img},
            ]
        }
    },
    getState() {
      return this._state;
    },
    _callSubscriber() {
        console.log('State was changed');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.unshift(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    addMessage() {
        let newMessage = {
            id: 6,
            message: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    updateNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._state);
    },
    dispatch(action){
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
        else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 6,
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = newText;
            this._callSubscriber(this._state);
        }
    }
}

export default store;
window.store = store;
// store - OOP
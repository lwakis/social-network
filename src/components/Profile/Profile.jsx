import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
    return (
        <div>
            <ProfileInfo />
            <MyPosts state={props.state.posts}
                     newPostText={props.state.newPostText}
                     dispatch={props.dispatch}
            />
        </div>
    )
}
export default Profile;
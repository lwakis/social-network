import React from 'react';
import s from './FriendsImg.module.css';
function FriendsImg(props) {

    return (
        <div className={s.containerImg}>
            <img src={props.img} alt="friends"/>
        </div>
    )
}
export default FriendsImg;
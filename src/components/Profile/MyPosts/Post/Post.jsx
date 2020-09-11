import React from 'react';
import s from './Post.module.css';
function Post(props) {
    return (
        <div className={s.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU' />
            <span>{props.message}</span>
            <div>
                <span>like </span>
                <span>{props.likesCount}</span>
            </div>
        </div>
    )
}
export default Post;
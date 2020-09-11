import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Message from "../Dialogs/Message/Message";
import FriendsImg from "./FriendsImg/FriendsImg";
function Navbar(props) {
    let friendsImgElement =
        props.state.friends.map( f => <FriendsImg img={f.img}/>);
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/friends" activeClassName={s.activeLink}>Friends</NavLink>
            </div>
            <div className={s.friendsImgContainer}>
                {friendsImgElement}
            </div>
        </nav>
    )
}
export default Navbar;
import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import {PATH} from "../../App";
import {ConnectedFriendsContainer} from "./Friends/ConnectedFriends";

// type NavbarProps = {
//     users: UserType[]
// }

export const Navbar = () => {
    return (
        <aside className={s.navbar}>
            <nav>
                <ul>
                    <li>
                        <NavLink activeClassName={s.selected} to={PATH.MAIN_PAGE}>Main page</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={s.selected} to={PATH.DIALOGS}>Messages</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={s.selected} to={PATH.MUSIC}>Music</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={s.selected} to={PATH.PHOTOS}>Photos</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={s.selected} to={PATH.FRIENDS}>Users</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={s.selected} to={PATH.SETTINGS}>Settings</NavLink>
                    </li>
                </ul>
            </nav>
            <ConnectedFriendsContainer/>
        </aside>
    );
};
import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import {PATH} from "../../App";
import {Friends} from "./Friends/Friends";
import {UserType} from "../../redux/store";

type NavbarProps = {
    users: UserType[]
}

export const Navbar: React.FC<NavbarProps> = (props) => {
    console.log("Navbar")
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
                        <NavLink activeClassName={s.selected} to={PATH.FRIENDS}>Friends</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={s.selected} to={PATH.SETTINGS}>Settings</NavLink>
                    </li>
                </ul>
            </nav>
            <Friends users={props.users}/>
        </aside>
    );
};
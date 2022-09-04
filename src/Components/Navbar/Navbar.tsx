import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <aside className={s.navbar}>
            <nav>
                <ul>
                    <li>
                        <NavLink activeClassName={s.selected} to="/main_page">Main page</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={s.selected} to="/dialogs">Messages</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={s.selected} to="/music">Music</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={s.selected} to="/photos">Photos</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={s.selected} to="/friends">Friends</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={s.selected} to="/settings">Settings</NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};
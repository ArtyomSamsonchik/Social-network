import React from "react";
import s from "./Navbar.module.css";
import {NavbarPages} from "../../App";

type NavbarProps = {
    selectedPage: NavbarPages
}

export const Navbar: React.FC<NavbarProps> = ({selectedPage}) => {
    const getClassName = (page: NavbarPages) => {
        return page === selectedPage ? s.selected : "";
    }

    return (
        <aside className={s.navbar}>
            <nav>
                <ul>
                    <li className={getClassName("Main page")}>
                        <a href="/main_page">Main page</a></li>
                    <li className={getClassName("Messages")}>
                        <a href="/messages">Messages</a></li>
                    <li className={getClassName("Music")}>
                        <a href="/music">Music</a></li>
                    <li className={getClassName("Photos")}>
                        <a href="/photos">Photos</a></li>
                    <li className={getClassName("Friends")}>
                        <a href="/friends">Friends</a></li>
                    <li className={getClassName("Settings")}>
                        <a href="/settings">Settings</a></li>
                </ul>
            </nav>
        </aside>
    );
};
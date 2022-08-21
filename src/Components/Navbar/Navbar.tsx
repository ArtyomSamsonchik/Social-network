import React from "react";
import s from "./Navbar.module.css";

export type NavbarPages = "Main page"
    | "Messages"
    | "News"
    | "Music"
    | "Photos"
    | "Friends"

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
                    <li className={getClassName("Main page")}>Main page</li>
                    <li className={getClassName("Messages")}>Messages</li>
                    <li className={getClassName("News")}>News</li>
                    <li className={getClassName("Music")}>Music</li>
                    <li className={getClassName("Photos")}>Photos</li>
                    <li className={getClassName("Friends")}>Friends</li>
                </ul>
            </nav>
        </aside>
    );
};
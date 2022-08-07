import React from "react";
import s from "./Navbar.module.css";

export const Navbar = () => {
    return (
        <aside className={s.navbar}>
            <nav>
                <ul>
                    <li>Моя страница</li>
                    <li>Сообщения</li>
                    <li>Новости</li>
                    <li>Музыка</li>
                    <li>Фотографии</li>
                    <li>Друзья</li>
                </ul>
            </nav>
        </aside>
    );
};
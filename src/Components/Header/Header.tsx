import React from "react";
import s from "./Header.module.css";
import Auth from "./Auth/Auth";


export const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.grid_item}>
                <h2>Header</h2>
                <Auth userId={null}/>
            </div>
        </header>
    );
};
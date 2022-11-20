import React from "react";
import s from "./Header.module.css";
import ConnectedAuthBar from "./AuthBar/ConnectedAuthBar";

export const Header = () => {

    return (
        <header className={s.header}>
            <div className={s.grid_item}>
                <h2>Header</h2>
                <ConnectedAuthBar/>
            </div>
        </header>
    );
};
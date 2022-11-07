import React, {FC} from "react";
import s from "./Header.module.css";
import Auth from "./Auth/Auth";
import {AuthDataType} from "../../redux/authReducer";

type HeaderProps = {
    authData: AuthDataType
}

export const Header: FC<HeaderProps> = (props) => {

    return (
        <header className={s.header}>
            <div className={s.grid_item}>
                <h2>Header</h2>
                <Auth authData={props.authData}/>
            </div>
        </header>
    );
};
import React, {FC} from "react";
import s from "./Header.module.css";
import AuthBar from "./AuthBar/AuthBar";
import {AuthDataType} from "../../redux/authReducer";

type HeaderProps = {
    authData: AuthDataType
    logout: () => void
}

export const Header: FC<HeaderProps> = (props) => {

    return (
        <header className={s.header}>
            <div className={s.grid_item}>
                <h2>Header</h2>
                <AuthBar authData={props.authData} logout={props.logout}/>
            </div>
        </header>
    );
};
import React from 'react';
import s from "./MessagesPage.module.css";
import {Dialogs} from "../Dialogs/Dialogs";

export const MessagesPage = () => {
    return (
        <div className={s.dialogs_content}>
            <Dialogs/>
            <div></div>
        </div>
    );
};
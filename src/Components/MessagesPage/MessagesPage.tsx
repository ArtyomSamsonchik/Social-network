import React from 'react';
import s from "./MessagesPage.module.css";
import {Dialogs} from "../Dialogs/Dialogs";
import {MessagesArea} from "../MessagesArea/MessagesArea";

export const MessagesPage = () => {
    return (
        <div className={s.dialogs_content}>
            <Dialogs/>
            <MessagesArea/>
        </div>
    );
};
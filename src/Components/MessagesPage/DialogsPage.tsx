import React from 'react';
import s from "./DialogsPage.module.css";
import {Dialogs} from "../Dialogs/Dialogs";
import {MessagesArea} from "../MessagesArea/MessagesArea";
import {UserType} from "../../App";

type DialogsPageProps = {
    users: UserType[]
}

export const DialogsPage: React.FC<DialogsPageProps> = (props) => {
    return (
        <div className={s.dialogs_content}>
            <Dialogs users={props.users}/>
            <MessagesArea/>
        </div>
    );
};
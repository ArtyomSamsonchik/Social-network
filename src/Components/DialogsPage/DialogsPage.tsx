import React from 'react';
import s from "./DialogsPage.module.css";
import {Dialogs} from "./Dialogs/Dialogs";
import {MessagesArea} from "./MessagesArea/MessagesArea";
import {MessageType, UserType} from "../../App";

type DialogsPageProps = {
    users: UserType[]
    messages: MessageType[]
}

export const DialogsPage: React.FC<DialogsPageProps> = (props) => {
    return (
        <div className={s.dialogs_content}>
            <Dialogs users={props.users}/>
            <MessagesArea messages={props.messages}/>
        </div>
    );
};
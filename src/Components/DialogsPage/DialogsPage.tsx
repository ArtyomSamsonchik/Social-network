import React from 'react';
import s from "./DialogsPage.module.css";
import {Dialogs} from "./Dialogs/Dialogs";
import {MessagesArea} from "./MessagesArea/MessagesArea";
import {DialogsPageType} from "../../redux/state";

type DialogsPageProps = {
    pageData: DialogsPageType
}

export const DialogsPage: React.FC<DialogsPageProps> = (props) => {
    return (
        <div className={s.dialogs_content}>
            <Dialogs users={props.pageData.users}/>
            <MessagesArea messages={props.pageData.messages}/>
        </div>
    );
};
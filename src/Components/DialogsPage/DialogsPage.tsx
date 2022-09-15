import React from 'react';
import s from "./DialogsPage.module.css";
import {Dialogs} from "./Dialogs/Dialogs";
import {MessagesList} from "./MessagesArea/MessagesList";
import {DialogsPageType, UserType} from "../../redux/state";
import {AddItemArea} from "../common/AddItemArea/AddItemArea";

type DialogsPageProps = {
    pageData: DialogsPageType
    addMessage: (user: UserType, messageText: string) => void
}

export const DialogsPage: React.FC<DialogsPageProps> = (props) => {
    const curDialogUser = props.pageData.users[0];

    const addMessageToDialog = (messageText: string) => {
        props.addMessage(curDialogUser, messageText);
    };

    return (
        <div className={s.dialogs_content}>
            <Dialogs users={props.pageData.users}/>
            <MessagesList messages={props.pageData.dialogs[curDialogUser.id]}/>
            <AddItemArea className={s.add_message}
                         placeholder={"Write new message..."}
                         addItem={addMessageToDialog}
            />
        </div>
    );
};
import React from 'react';
import s from "./DialogsPage.module.css";
import {Dialogs} from "./Dialogs/Dialogs";
import {MessagesList} from "./MessagesArea/MessagesList";
import {MessageType, UserIDType, UserType} from "../../redux/store";
import {AddItemArea} from "../common/AddItemArea/AddItemArea";

type DialogsPageProps = {
    activeDialogID: UserIDType | null
    users: UserType[]
    messages: MessageType[]
    openNewDialog:  (userID: number) => void
    addMessageToDialog:  (text: string) => void
}

export const DialogsPage: React.FC<DialogsPageProps> = (props) => {

    return (
        <div className={s.dialogs_content}>
            <Dialogs users={props.users}
                     activeDialogID={props.activeDialogID}
                     openNewDialog={props.openNewDialog}
            />
            <MessagesList messages={props.messages}/>
            <AddItemArea className={s.add_message}
                         placeholder={"Write new message..."}
                         addItem={props.addMessageToDialog}
            />
        </div>
    );
};
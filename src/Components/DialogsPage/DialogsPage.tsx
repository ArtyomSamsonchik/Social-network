import React, {useState} from 'react';
import s from "./DialogsPage.module.css";
import {Dialogs} from "./Dialogs/Dialogs";
import {MessagesList} from "./MessagesArea/MessagesList";
import {DialogsPageType, UserIDType} from "../../redux/state";
import {AddItemArea} from "../common/AddItemArea/AddItemArea";

type DialogsPageProps = {
    pageData: DialogsPageType
    addMessage: (userID: UserIDType, messageText: string) => void
}

export const DialogsPage: React.FC<DialogsPageProps> = (props) => {
    const [dialogKey, setDialogKey] = useState<UserIDType | null>(null);

    const addMessageToDialog = (messageText: string) => {
        if (dialogKey) {
            props.addMessage(dialogKey, messageText);
        }
    };

    const dialogIsExisting = dialogKey && props.pageData.dialogs[dialogKey];
    let messages = dialogIsExisting ? props.pageData.dialogs[dialogKey] : []

    return (
        <div className={s.dialogs_content}>
            <Dialogs users={props.pageData.users}
                     newDialogKey={setDialogKey}
            />
            <MessagesList messages={messages}/>
            <AddItemArea className={s.add_message}
                         placeholder={"Write new message..."}
                         addItem={addMessageToDialog}
            />
        </div>
    );
};
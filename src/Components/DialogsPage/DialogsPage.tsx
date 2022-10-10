import React from 'react';
import s from "./DialogsPage.module.css";
import {Dialogs} from "./Dialogs/Dialogs";
import {MessagesList} from "./MessagesArea/MessagesList";
import {DialogsPageType, UserIDType} from "../../redux/store";
import {AddItemArea} from "../common/AddItemArea/AddItemArea";

type DialogsPageProps = {
    activeDialogID: UserIDType | null
    dialogsPageData: DialogsPageType
    openNewDialog:  (userID: number) => void
    addMessageToDialog:  (text: string) => void
}

export const DialogsPage: React.FC<DialogsPageProps> = (props) => {
    const activeDialogID = props.activeDialogID
    const dialogIsExisting = activeDialogID && props.dialogsPageData.dialogs[activeDialogID]
    const messages = dialogIsExisting ? props.dialogsPageData.dialogs[activeDialogID] : []

    return (
        <div className={s.dialogs_content}>
            <Dialogs users={props.dialogsPageData.users}
                     activeDialogID={props.activeDialogID}
                     openNewDialog={props.openNewDialog}
            />
            <MessagesList messages={messages}/>
            <AddItemArea className={s.add_message}
                         placeholder={"Write new message..."}
                         addItem={props.addMessageToDialog}
            />
        </div>
    );
};
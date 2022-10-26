import React, {FC} from 'react';
import s from "./DialogsPage.module.css";
import {Dialogs} from "./Dialogs/Dialogs";
import {MessagesList} from "./MessagesArea/MessagesList";
import {AddItemArea} from "../common/AddItemArea/AddItemArea";
import {DialogsPageType} from "../../redux/dialogsPageReducer";
import {UserIDType} from "../../redux/mainPageReducer";

type DialogsPageProps = {
    dialogsPageData: DialogsPageType
    openNewDialog: (userID: UserIDType) => void
    addMessageToDialog: (text: string, userID: UserIDType | null) => void
}

export const DialogsPage: FC<DialogsPageProps> = (props) => {
    const activeDialogID = props.dialogsPageData.activeDialogID

    const dialogIsExisting = activeDialogID && props.dialogsPageData.dialogs[activeDialogID]
    const messages = dialogIsExisting ? props.dialogsPageData.dialogs[activeDialogID] : []

    const addMessage = (messageText: string) => {
        props.addMessageToDialog(messageText, activeDialogID)
    }

    return (
        <div className={s.dialogs_content}>
            <Dialogs users={props.dialogsPageData.users}
                     activeDialogID={activeDialogID}
                     openNewDialog={props.openNewDialog}
            />
            <MessagesList messages={messages}/>
            <AddItemArea className={s.add_message}
                         placeholder={"Write new message..."}
                         addItem={addMessage}
            />
        </div>
    )
}
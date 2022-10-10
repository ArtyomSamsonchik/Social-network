import React, {useState} from 'react';
import s from "./DialogsPage.module.css";
import {Dialogs} from "./Dialogs/Dialogs";
import {MessagesList} from "./MessagesArea/MessagesList";
import {ActionsType, DialogsPageType, UserIDType} from "../../redux/store";
import {AddItemArea} from "../common/AddItemArea/AddItemArea";
import {addMessageAC} from "../../redux/dialogsPageReducer";

type DialogsPageProps = {
    pageData: DialogsPageType
    dispatch: (action: ActionsType) => void
}

export const DialogsPage: React.FC<DialogsPageProps> = (props) => {
    const [activeDialogID, setActiveDialogID] = useState<UserIDType | null>(null);

    const addMessageToDialog = (messageText: string) => {
        if (activeDialogID) {
            props.dispatch(addMessageAC(activeDialogID, messageText));
        }
    };

    const dialogIsExisting = activeDialogID && props.pageData.dialogs[activeDialogID];
    let messages = dialogIsExisting ? props.pageData.dialogs[activeDialogID] : []

    return (
        <div className={s.dialogs_content}>
            <Dialogs users={props.pageData.users}
                     activeDialogID={activeDialogID as UserIDType}
                     openNewDialog={setActiveDialogID}
            />
            <MessagesList messages={messages}/>
            <AddItemArea className={s.add_message}
                         placeholder={"Write new message..."}
                         addItem={addMessageToDialog}
            />
        </div>
    );
};
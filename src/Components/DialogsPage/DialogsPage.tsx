import React, {useContext} from 'react';
import s from "./DialogsPage.module.css";
import {Dialogs} from "./Dialogs/Dialogs";
import {MessagesList} from "./MessagesArea/MessagesList";
import {UserIDType} from "../../redux/store";
import {AddItemArea} from "../common/AddItemArea/AddItemArea";
import {GlobalStoreStateContext} from "../../context/context";

type DialogsPageProps = {
    activeDialogID: UserIDType | null
    // dialogsPageData: DialogsPageType
    openNewDialog:  (userID: number) => void
    addMessageToDialog:  (text: string) => void
}

export const DialogsPage: React.FC<DialogsPageProps> = (props) => {
    const {dialogsPageData} = useContext(GlobalStoreStateContext)

    const activeDialogID = props.activeDialogID
    const dialogIsExisting = activeDialogID && dialogsPageData.dialogs[activeDialogID]
    const messages = dialogIsExisting ? dialogsPageData.dialogs[activeDialogID] : []

    return (
        <div className={s.dialogs_content}>
            <Dialogs users={dialogsPageData.users}
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
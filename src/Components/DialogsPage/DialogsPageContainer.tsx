import React, {useState} from 'react';
import {UserIDType} from "../../redux/store";
import {addMessageAC} from "../../redux/dialogsPageReducer";
import {DialogsPage} from "./DialogsPage";
import {AppStoreType} from "../../redux/redux-store";

type DialogsPageContainerProps = {
    store: AppStoreType
}

export const DialogsPageContainer: React.FC<DialogsPageContainerProps> = (props) => {
    console.log("Dialogs Page Container")

    const state = props.store.getState()
    const [activeDialogID, setActiveDialogID] = useState<UserIDType | null>(null);

    const addMessageToDialog = (messageText: string) => {
        if (activeDialogID) {
            props.store.dispatch(addMessageAC(activeDialogID, messageText))
        }
    }

    return (
        <DialogsPage activeDialogID={activeDialogID}
                     dialogsPageData={state.dialogsPageData}
                     openNewDialog={setActiveDialogID}
                     addMessageToDialog={addMessageToDialog}
        />
    );
};
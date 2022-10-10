import React, {useState} from 'react';
import {UserIDType} from "../../redux/store";
import {addMessageAC} from "../../redux/dialogsPageReducer";
import {AppStoreType} from "../../redux/redux-store";
import {DialogsPage} from "./DialogsPage";

type DialogsPageContainerProps = {
    store: AppStoreType
}

export const DialogsPageContainer: React.FC<DialogsPageContainerProps> = (props) => {
    const [activeDialogID, setActiveDialogID] = useState<UserIDType | null>(null);
    const state = props.store.getState()

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
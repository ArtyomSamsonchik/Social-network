import React, {useContext, useState} from 'react';
import {UserIDType} from "../../redux/store";
import {addMessageAC} from "../../redux/dialogsPageReducer";
import {DialogsPage} from "./DialogsPage";
import {GlobalStoreDispatchContext} from "../../context/context";

// type DialogsPageContainerProps = {
//     store: AppStoreType
// }

export const DialogsPageContainer = () => {
    // const state = useContext(GlobalStoreStateContext)
    // const state = props.store.getState()
    const dispatch = useContext(GlobalStoreDispatchContext)
    const [activeDialogID, setActiveDialogID] = useState<UserIDType | null>(null);

    const addMessageToDialog = (messageText: string) => {
        if (activeDialogID) {
            dispatch(addMessageAC(activeDialogID, messageText))
        }
    }

    return (
        <DialogsPage activeDialogID={activeDialogID}
                     // dialogsPageData={state.dialogsPageData}
                     openNewDialog={setActiveDialogID}
                     addMessageToDialog={addMessageToDialog}
        />
    );
};
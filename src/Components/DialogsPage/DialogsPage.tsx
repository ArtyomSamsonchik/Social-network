import React, {FC} from 'react';
import s from "./DialogsPage.module.css";
import {Dialogs} from "./Dialogs/Dialogs";
import {MessagesList} from "./MessagesArea/MessagesList";
import {DialogsPageType} from "../../redux/dialogsPageReducer";
import {UserIDType} from "../../redux/mainPageReducer";
import AddItemForm, {AddItemFormData} from "../common/AddItemForm/AddItemForm";
import {FormSubmitHandler} from "redux-form/lib/reduxForm";

type DialogsPageProps = {
    dialogsPageData: DialogsPageType
    openNewDialog: (userID: UserIDType) => void
    addMessageToDialog: (text: string, userID: UserIDType | null) => void
}

export const DialogsPage: FC<DialogsPageProps> = (props) => {
    const activeDialogID = props.dialogsPageData.activeDialogID

    const dialogIsExisting = activeDialogID && props.dialogsPageData.dialogs[activeDialogID]
    const messages = dialogIsExisting ? props.dialogsPageData.dialogs[activeDialogID] : []

    const addMessage: FormSubmitHandler<AddItemFormData> = (
        values,
        dispatch,
        formProps
    ) => {
        const clear = formProps.clearFields
        props.addMessageToDialog(values.addItem, activeDialogID)

        if (clear) clear(false, false, "addItem")
    }

    return (
        <div className={s.dialogs_content}>
            <Dialogs users={props.dialogsPageData.users}
                     activeDialogID={activeDialogID}
                     openNewDialog={props.openNewDialog}
            />
            <MessagesList messages={messages}/>
            <AddItemForm className={s.add_message}
                         placeholder={"Write new message..."}
                         onSubmit={addMessage}
            />
        </div>
    )
}
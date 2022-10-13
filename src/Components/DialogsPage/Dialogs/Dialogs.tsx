import React from 'react';
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {UserIDType, UserType} from "../../../redux/store";


type DialogsProps = {
    activeDialogID: UserIDType | null
    users: UserType[]
    openNewDialog: (userID: number) => void
}

export const Dialogs: React.FC<DialogsProps> = (props) => {
    console.log("Dialogs")
    const dialogItems = props.users.map(user => {
        const openDialogClickHandler = () => {
            props.openNewDialog(user.id)
        };

        return <DialogItem key={"user" + user.id}
                           isActive={user.id === props.activeDialogID}
                           user={user}
                           onClick={openDialogClickHandler}
        />;
    });

    return (
        <div className={s.dialogs}>
            {dialogItems}
        </div>
    );
};
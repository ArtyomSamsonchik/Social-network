import React from 'react';
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {UserType} from "../../../redux/store";


type DialogsProps = {
    users: UserType[]
    newDialogKey: (userID: number) => void
}

export const Dialogs: React.FC<DialogsProps> = (props) => {
    const dialogItems = props.users.map(user => {
        const openDialogClickHandler = () => {
            props.newDialogKey(user.id)
        };

        return <DialogItem key={"user" + user.id} user={user} onClick={openDialogClickHandler}/>;
    });

    return (
        <div className={s.dialogs}>
            {dialogItems}
        </div>
    );
};
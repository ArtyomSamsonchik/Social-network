import React from 'react';
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {UserType} from "../../../redux/state";


type DialogsProps = {
    users: UserType[]
}

export const Dialogs: React.FC<DialogsProps> = (props) => {
    const dialogItems = props.users.map(user => {
        return <DialogItem key={user.id} userName={user.name} id={user.id}/>;
    });

    return (
        <div className={s.dialogs}>
            {dialogItems}
        </div>
    );
};
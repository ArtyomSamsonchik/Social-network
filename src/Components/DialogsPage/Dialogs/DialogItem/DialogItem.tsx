import React from 'react';
import {NavLink} from "react-router-dom";
import {UserType} from "../../../../redux/state";

type DialogProps = {
    user: UserType
    onClick: () => void
}

export const DialogItem: React.FC<DialogProps> = (props) => {
    const path = `/dialogs/${props.user.id}`
    return (
        <div>
            <NavLink to={path} onClick={props.onClick}>{props.user.name}</NavLink>
        </div>
    );
};
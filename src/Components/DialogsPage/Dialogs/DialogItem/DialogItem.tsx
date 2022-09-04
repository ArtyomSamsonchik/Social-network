import React from 'react';
import {NavLink} from "react-router-dom";

type DialogProps = {
    userName: string
    id: number
}

export const DialogItem: React.FC<DialogProps> = (props) => {
    const path = `/dialogs/${props.id}`
    return (
        <div>
            <NavLink to={path}>{props.userName}</NavLink>
        </div>
    );
};
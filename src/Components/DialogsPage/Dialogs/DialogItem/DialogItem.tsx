import React from 'react'
import {NavLink} from "react-router-dom"
import s from "./DialogItem.module.css"
import {UserType} from "../../../../redux/mainPageReducer";

type DialogProps = {
    isActive: boolean
    className?: string
    user: UserType
    onClick: () => void
}

export const DialogItem: React.FC<DialogProps> = (props) => {
    const path = `/dialogs/${props.user.id}`
    return (
        <div>
            <NavLink to={path}
                     activeClassName={props.isActive ? s.active : ""}
                     onClick={props.onClick}
            >{props.user.name}</NavLink>
        </div>
    );
};
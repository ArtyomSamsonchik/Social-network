import React from 'react';
import s from "./Message.module.css";

type MessageProps = {
    userName: string
    messageText: string
}

export const Message: React.FC<MessageProps> = (props) => {
    return (
        <div className={s.message}>
            <div>{props.userName}</div>
            <div>{props.messageText}</div>
        </div>
    );
};
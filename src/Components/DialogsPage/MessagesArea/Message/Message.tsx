import React from 'react';
import s from "./Message.module.css";

type MessageProps = {
    authorName: string
    messageText: string
}

export const Message: React.FC<MessageProps> = (props) => {
    return (
        <div className={s.message}>
            <div>{props.authorName}</div>
            <div>{props.messageText}</div>
        </div>
    );
};
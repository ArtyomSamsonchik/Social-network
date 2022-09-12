import React from 'react';
import s from "./MessagesArea.module.css";
import {Message} from "./Message/Message";
import {MessageType} from "../../../redux/state";

type MessagesAreaProps = {
    messages: MessageType[]
}

export const MessagesArea: React.FC<MessagesAreaProps> = (props) => {
    const messages = props.messages.map((message, i) => {
        return (
            <Message key={"message " + i}
                     userName={message.userName}
                     messageText={message.messageText}
            />
        );
    });

    return (
        <div className={s.messages}>
            {messages}
        </div>
    );
};
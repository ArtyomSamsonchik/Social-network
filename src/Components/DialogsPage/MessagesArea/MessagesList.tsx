import React from 'react';
import s from "./MessagesArea.module.css";
import {Message} from "./Message/Message";
import {MessageType} from "../../../redux/store";

type MessagesAreaProps = {
    messages: MessageType[]
}

export const MessagesList: React.FC<MessagesAreaProps> = (props) => {
    const messages = props.messages.map((message, i) => {
        return (
            <Message key={"message " + i}
                     authorName={message.authorName}
                     messageText={message.messageText}
            />
        );
    });

    return (
        <div className={s.messages}>
            {messages.length > 0 ? messages : "Empty message list"}
        </div>
    );
};
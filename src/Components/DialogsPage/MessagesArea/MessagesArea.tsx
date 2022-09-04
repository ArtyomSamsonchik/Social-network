import React from 'react';
import s from "./MessagesArea.module.css";
import {Message} from "./Message/Message";

export const MessagesArea = () => {
    return (
        <div className={s.messages}>
            <Message userName={"Sanya"} messageText={"Hello"}/>
            <Message userName={"Sanya"} messageText={"What's up?"}/>
            <Message userName={"Sanya"} messageText={"How are you?"}/>
            <Message userName={"Sanya"} messageText={"When we go to drink?"}/>
        </div>
    );
};
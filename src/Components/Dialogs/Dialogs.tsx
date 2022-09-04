import React from 'react';
import s from "./Dialogs.module.css";
import {DialogItem} from "../DialogItem/DialogItem";

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <DialogItem userName={"Sanya"} id={1}/>
            <DialogItem userName={"Artyom"} id={2}/>
            <DialogItem userName={"Ilya"} id={3}/>
            <DialogItem userName={"Anton"} id={4}/>
            <DialogItem userName={"Leha"} id={5}/>
        </div>
    );
};
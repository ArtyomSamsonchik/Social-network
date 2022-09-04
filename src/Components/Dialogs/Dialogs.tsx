import React from 'react';
import s from "./Dialogs.module.css";
import {Dialog} from "../Dialog/Dialog";

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <Dialog userName={"Sanya"}/>
            <Dialog userName={"Artyom"}/>
            <Dialog userName={"Ilya"}/>
            <Dialog userName={"Anton"}/>
            <Dialog userName={"Leha"}/>
        </div>
    );
};
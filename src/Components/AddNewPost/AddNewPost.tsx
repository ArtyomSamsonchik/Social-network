import React from 'react';
import s from "./AddNewPost.module.css";

export const AddNewPost = () => {
    return (
        <div className={s.add_post}>
            <div>Add new post:</div>
            <textarea id={"input-post"} cols={50} rows={5}></textarea>
            <button className={s.button}>Add</button>
        </div>
    );
};
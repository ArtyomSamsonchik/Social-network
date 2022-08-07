import React from "react";
import s from "./Post.module.css";

type PostPropsType = {
    userName: string
    imageSrc: string
    postText: string
}

export const Post: React.FC<PostPropsType> = (
    {
        userName,
        imageSrc,
        postText
    }
) => {
    return (
        <div>
            <h4>{userName}</h4>
            <div className={s.post_body}>
                <div className={s.image_container}>
                    <img src={imageSrc} alt="user"/>
                </div>
                <div>{postText}</div>
            </div>
        </div>
    );
};
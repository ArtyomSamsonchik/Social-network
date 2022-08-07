import React from "react";
import s from "./ProfileInfo.module.css";

export const Profile = () => {
    return (
        <div className={s.profile}>
            <div className={s.image_container}>
                <img src="" alt="user"/>
            </div>
            <div className={s.user_name}>
                User name
            </div>
        </div>
    );
};
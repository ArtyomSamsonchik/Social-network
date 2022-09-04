import React from "react";
import s from "./ProfileInfo.module.css";
import userImage from "../../images/Portrait_Placeholder.png";

export const ProfileInfo = () => {
    return (
        <div className={s.profile}>
            <div className={s.image_container}>
                <img src={userImage} alt="user"/>
            </div>
            <div className={s.user_name}>
                User name
            </div>
        </div>
    );
};
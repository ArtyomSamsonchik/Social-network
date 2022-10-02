import React from 'react';
import {UserType} from "../../../redux/store";
import s from "./Friends.module.css";

type FriendsProps = {
    users: UserType[]
}

export const Friends: React.FC<FriendsProps> = (props) => {
    const mappedUsers = props.users.map(user => {
        return (
            <div key={user.id} className={s.friendItem}>
                <div className={s.image_container}>
                    <img src={user.imageSrc} alt="user"/>
                </div>
                <span>{user.name}</span>
            </div>
        );
    });

    return (
        <div className={s.friends}>
            <h4 className={s.header}>Friends</h4>
            {mappedUsers}
        </div>
    );
};
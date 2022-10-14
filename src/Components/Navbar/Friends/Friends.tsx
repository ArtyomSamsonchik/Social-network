import React, {useContext} from 'react';
import s from "./Friends.module.css";
import {GlobalStoreStateContext} from "../../../context/context";

// type FriendsProps = {
//     users: UserType[]
// }

export const Friends = () => {
    const users = useContext(GlobalStoreStateContext).sidebarPageData.users

    const mappedUsers = users.map(user => {
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
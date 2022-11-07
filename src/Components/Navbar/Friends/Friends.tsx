import React, {useContext} from 'react';
import s from "./Friends.module.css";
import {GlobalStoreStateContext} from "../../../context/context";
import UserImage from "../../common/UserImage/UserImage";
import {UserType} from "../../../redux/usersPageReducer";

type FriendsProps = {
    users: UserType[]
}

export const Friends = () => {
    const users = useContext(GlobalStoreStateContext).sidebarPageData.followedUsers

    const mappedUsers = users.map(user => {
        return (
            <div key={user.id} className={s.friendItem}>
                {/*<UserImage imageSrc={user.imageSrc} imageAlt={"user"}/>*/}
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
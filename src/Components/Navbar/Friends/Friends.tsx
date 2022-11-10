import React, {FC} from 'react';
import s from "./Friends.module.css";
import {UserType} from "../../../redux/usersPageReducer";
import UserImage from "../../common/UserImage/UserImage";

type FriendsProps = {
    users: UserType[]
}

//TODO: add preloader here. Memo Friends to avoid useless rerender.
export const Friends: FC<FriendsProps> = ({users}) => {
    const mappedUsers = users.map(user => {
        return (
            <div key={user.id} className={s.friendItem}>
                <UserImage imageSrc={user.photos.small} imageAlt={"user"}/>
                <span className={s.userName}>{user.name}</span>
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
import React, {FC} from 'react';
import {MemoUser} from "./User/User";
import {MemoPaginationBar} from "../common/PaginationBar/PaginationBar";
import {UsersPageType} from "../../redux/UsersPageReducer";
import Preloader from "../common/Preloader/Preloader";
import s from "./UsersPage.module.css"

type UsersPageProps = {
    usersPageData: UsersPageType
    onSetFollowUserClick: (isFollowed: boolean, userId: number) => void
    onSetCurrentPageClick: (page: number) => void
}

const UsersPage: FC<UsersPageProps> = (props) => {
    const {users, currentPage, totalUsersCount, pageSize, isFetchingUsers} = props.usersPageData
    const totalPagesCount = Math.ceil(totalUsersCount / pageSize)

    const renderedUsers = users.map(user => {
        return <MemoUser key={"user" + user.id} user={user} onClick={props.onSetFollowUserClick}/>
    })

    return (
        <div className={s.user_page_container}>
            <MemoPaginationBar totalPagesCount={totalPagesCount}
                               currentPage={currentPage}
                               setCurrentPage={props.onSetCurrentPageClick}
            />
            <ul className={s.users_list}>
                {isFetchingUsers ? <Preloader/> : renderedUsers}
            </ul>
        </div>
    )
}

export default UsersPage
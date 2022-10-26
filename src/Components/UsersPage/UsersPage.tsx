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

    const mappedUsers = users.map(user => {
        return <MemoUser key={"user " + user.id} user={user} onClick={props.onSetFollowUserClick}/>
    })

    return (
        <div className={s.user_page_container}>
            <MemoPaginationBar totalPagesCount={totalPagesCount}
                               currentPage={currentPage}
                               setCurrentPage={props.onSetCurrentPageClick}
            />
            {
                isFetchingUsers
                    ? <Preloader/>
                    : <ul>{mappedUsers}</ul>
            }
        </div>
    )
}

export default UsersPage
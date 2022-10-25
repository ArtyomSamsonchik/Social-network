import React, {FC} from 'react';
import {MemoUser} from "./User/User";
import {MemoPaginationBar} from "../common/PaginationBar/PaginationBar";
import {UsersPageType} from "../../redux/UsersPageReducer";

type UsersPageProps = {
    usersPageData: UsersPageType
    onUserClick: (isFollowed: boolean, userId: number) => void
    onSetCurrentPageClick: (page: number) => void
}

const UsersPage: FC<UsersPageProps> = (props) => {
    const {users, currentPage, totalUsersCount, pageSize} = props.usersPageData
    const totalPagesCount = Math.ceil(totalUsersCount / pageSize)

    const mappedUsers = users.map(user => {
        return <MemoUser key={"user " + user.id} user={user} onClick={props.onUserClick}/>
    })

    return (
        <div>
            <MemoPaginationBar totalPagesCount={totalPagesCount}
                               currentPage={currentPage}
                               setCurrentPage={props.onSetCurrentPageClick}
            />
            <ul>{mappedUsers}</ul>
        </div>
    )
}

export default UsersPage
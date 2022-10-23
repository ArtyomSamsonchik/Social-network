import React from 'react';
import {UsersPageType, UserType} from "../../redux/UsersPageReducer";
import {MemoUser} from "./User/User";
import * as API from "../../API";
import {MemoPaginationBar} from "../common/PaginationBar/PaginationBar";


type UsersPageProps = {
    usersPageData: UsersPageType
    setUsers: (users: UserType[]) => void
    setUsersCount: (usersCount: number) => void
    setCurrentPage: (currentPage: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

class UsersPage extends React.Component<UsersPageProps> {
    constructor(props: Readonly<UsersPageProps>) {
        super(props)
        this.onUserClick = this.onUserClick.bind(this)
        this.onGoToPageClick = this.onGoToPageClick.bind(this)
    }

    componentDidMount() {
        //TODO: 2 dispatch - 2 renders. Think about optimization
        API.getUsers().then(({data}) => {
            this.props.setUsers(data.items)
            this.props.setUsersCount(data.totalCount)
        })
    }

    onUserClick(isFollowed: boolean, userId: number) {
        const {follow, unfollow} = this.props
        isFollowed ? unfollow(userId) : follow(userId)
    }

    onGoToPageClick(page: number) {
        const {pagination} = this.props.usersPageData
        API.getUsers(pagination, page).then(({data}) => {
            this.props.setUsers(data.items)
            this.props.setCurrentPage(page)
        })
    }

    render() {
        const {users, currentPage, totalUsersCount, pagination} = this.props.usersPageData
        const totalPagesCount = Math.ceil(totalUsersCount / pagination)
        const mappedUsers = users.map(user => {
            return <MemoUser key={user.id} user={user} onClick={this.onUserClick}/>
        })


        return (
            <div>
                <MemoPaginationBar totalPagesCount={totalPagesCount}
                                   currentPage={currentPage}
                                   goToPage={this.onGoToPageClick}
                />
                <ul>{mappedUsers}</ul>
            </div>
        )
    }
}

export default UsersPage
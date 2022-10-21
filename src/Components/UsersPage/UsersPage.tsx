import React from 'react';
import {UserType} from "../../redux/UsersPageReducer";
import {MemoUser} from "./User/User";
import * as API from "../../API";


type UsersPageProps = {
    users: UserType[]
    setUsers: (users: UserType[]) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

class UsersPage extends React.Component<UsersPageProps> {
    constructor(props: Readonly<UsersPageProps>) {
        super(props)
        this.onUserClick = this.onUserClick.bind(this)
    }
    componentDidMount() {
        API.getUsers().then(({data}) => this.props.setUsers(data.items))
    }

    onUserClick(isFollowed: boolean, userId: number) {
        const {follow, unfollow} = this.props
        isFollowed ? unfollow(userId) : follow(userId)
    }

    render() {
        const mappedUsers = this.props.users.map(user => {
            return <MemoUser key={user.id} user={user} onClick={this.onUserClick}/>
        })

        return (
            <ul>{mappedUsers}</ul>
        )
    }
}

export default UsersPage
import React from 'react';
import {UserType} from "../../redux/UsersPageReducer";
import User from "./User/User";
import store from "../../redux/redux-store";
import * as API from "../../API";


type UsersPageProps = {
    users: UserType[]
    setUsers: (users: UserType[]) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

type UsersPageState = {
    users: UserType[]
}

class UsersPage extends React.Component<UsersPageProps, UsersPageState> {
    constructor(props: UsersPageProps) {
        super(props)
        this.state = {
            users: store.getState().usersPageData.users
        }
    }

    componentDidMount() {
        API.getUsers().then(({data}) => this.props.setUsers(data.items))
    }

    render() {
        const mappedUsers = this.props.users.map(user => {
            const onClickHandler = () => {
                user.followed
                    ? this.props.unfollow(user.id)
                    : this.props.follow(user.id)
            }

            return <User key={user.id} user={user} onClick={onClickHandler}/>
        })

        return (
            <ul>{mappedUsers}</ul>
        )
    }
}

export default UsersPage
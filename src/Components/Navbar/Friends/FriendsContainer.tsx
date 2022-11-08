import React, {Component} from 'react';
import {UserType} from "../../../redux/usersPageReducer";
import {Friends} from "./Friends";
import * as API from "../../../API"

type FriendsContainerProps = {
    followedUsers: UserType[]
    isFetchingFollowedUsers: boolean
    setFollowedUsers: (followedUsers: UserType[]) => void
    setIsFetchingFollowedUsers: (isFetching: boolean) => void
}

class FriendsContainer extends Component<FriendsContainerProps> {
    componentDidMount() {
        API.getUsers({friend: true}).then(({data}) => {
            this.props.setFollowedUsers(data.items)
        })
    }

    componentDidUpdate() {
        if (!this.props.isFetchingFollowedUsers) return

        API.getUsers({friend: true}).then(({data}) => {
            this.props.setFollowedUsers(data.items)
            this.props.setIsFetchingFollowedUsers(false)
        })
    }

    render() {
        return <Friends users={this.props.followedUsers}/>
    }
}

export default FriendsContainer
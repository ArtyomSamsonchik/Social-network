import React, {Component} from 'react';
import {UserType} from "../../../redux/usersPageReducer";
import {Friends} from "./Friends";
import * as API from "../../../API"
import {batch} from "react-redux";
import {SidebarPageType} from "../../../redux/sidebarPageReducer";

type FriendsContainerProps = {
    sidebarPageData: SidebarPageType
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
        const {sidebarPageData, setFollowedUsers, setIsFetchingFollowedUsers} = this.props

        if (!sidebarPageData.isFetchingFollowedUsers) return

        API.getUsers({friend: true}).then(({data}) => {
            batch(() => {
                setFollowedUsers(data.items)
                setIsFetchingFollowedUsers(false)
            })
        })
    }

    render() {
        return <Friends users={this.props.sidebarPageData.followedUsers}/>
    }
}

export default FriendsContainer
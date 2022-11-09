import React, {Component} from 'react';
import {Friends} from "./Friends";
import {SidebarPageType} from "../../../redux/sidebarPageReducer";

type FriendsContainerProps = {
    sidebarPageData: SidebarPageType
    getFollowedUsers: (isFetching: boolean) => void
}

class FriendsContainer extends Component<FriendsContainerProps> {
    componentDidMount() {
        const isFetching = this.props.sidebarPageData.isFetchingFollowedUsers
        this.props.getFollowedUsers(isFetching)
    }

    componentDidUpdate() {
        const isFetching = this.props.sidebarPageData.isFetchingFollowedUsers
        this.props.getFollowedUsers(isFetching)
    }

    render() {
        return <Friends users={this.props.sidebarPageData.followedUsers}/>
    }
}

export default FriendsContainer
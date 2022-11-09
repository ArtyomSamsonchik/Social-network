import {UsersPageType} from "../../redux/usersPageReducer";
import {Component} from "react";
import UsersPage from "./UsersPage";

type UsersPageContainerProps = {
    usersPageData: UsersPageType
    getUsers: (page: number, usersCount: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

class UsersPageContainer extends Component<UsersPageContainerProps> {
    constructor(props: Readonly<UsersPageContainerProps>) {
        super(props)
        this.onSetFollowUserClick = this.onSetFollowUserClick.bind(this)
        this.onSetUnfollowUserClick = this.onSetUnfollowUserClick.bind(this)
        this.onSetCurrentPageClick = this.onSetCurrentPageClick.bind(this)
    }

    componentDidMount() {
        const {currentPage, pageSize} = this.props.usersPageData
        this.props.getUsers(currentPage, pageSize)
    }

    onSetFollowUserClick(userId: number) {
        this.props.follow(userId)
    }

    onSetUnfollowUserClick(userId: number) {
        this.props.unfollow(userId)
    }

    onSetCurrentPageClick(page: number) {
        //TODO: performance issue - add logic to kill previous fetch of users when clicking another page.
        // Use abortController?
        // const {usersPageData, setIsFetchingUsers, setUsers, setCurrentPage} = this.props

        this.props.getUsers(page, this.props.usersPageData.pageSize)
    }

    render() {
        return <UsersPage usersPageData={this.props.usersPageData}
                          onSetFollowUserClick={this.onSetFollowUserClick}
                          onSetUnfollowUserClick={this.onSetUnfollowUserClick}
                          onSetCurrentPageClick={this.onSetCurrentPageClick}
        />
    }
}

export default UsersPageContainer
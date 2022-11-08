import {UsersPageType, UserType} from "../../redux/usersPageReducer";
import {Component} from "react";
import * as API from "../../API"
import UsersPage from "./UsersPage";
import {batch} from "react-redux";

type UsersPageContainerProps = {
    usersPageData: UsersPageType
    setUsers: (users: UserType[]) => void
    setUsersCount: (usersCount: number) => void
    setCurrentPage: (currentPage: number) => void
    setIsFetchingUsers: (isFetching: boolean) => void
    setIsFetchingFollowedUsers: (isFetching: boolean) => void
    setUpFollowing: (userId: number, settingUpFollowing: boolean) => void
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
}

class UsersPageContainer extends Component<UsersPageContainerProps> {
    constructor(props: Readonly<UsersPageContainerProps>) {
        super(props)
        this.onSetFollowUserClick = this.onSetFollowUserClick.bind(this)
        this.onSetUnfollowUserClick = this.onSetUnfollowUserClick.bind(this)
        this.onSetCurrentPageClick = this.onSetCurrentPageClick.bind(this)
    }

    componentDidMount() {
        const {setUsers, setUsersCount, setIsFetchingUsers} = this.props

        setIsFetchingUsers(true)
        API.getUsers().then(({data}) => {
            batch(() => {
                setUsers(data.items)
                setUsersCount(data.totalCount)
                setIsFetchingUsers(false)
            })
        })
    }

    onSetFollowUserClick(userId: number) {
        this.props.setUpFollowing(userId, true)

        API.follow(userId).then(({data}) => {
            if (data.resultCode === 0) {
                batch(() => {
                    this.props.followUser(userId)
                    this.props.setUpFollowing(userId, false)
                    this.props.setIsFetchingFollowedUsers(true)
                })
            }
        })
    }

    onSetUnfollowUserClick(userId: number) {
        this.props.setUpFollowing(userId, true)

        API.unfollow(userId).then(({data}) => {
            if (data.resultCode === 0) {
                batch(() => {
                    this.props.unfollowUser(userId)
                    this.props.setUpFollowing(userId, false)
                    this.props.setIsFetchingFollowedUsers(true)
                })
            }
        })
    }

    onSetCurrentPageClick(page: number) {
        //TODO: performance issue - add logic to kill previous fetch of users when clicking another page.
        // Use abortController?
        const {usersPageData, setIsFetchingUsers, setUsers, setCurrentPage} = this.props

        setIsFetchingUsers(true)
        API.getUsers({page, count: usersPageData.pageSize}).then(({data}) => {
            batch(() => {
                setUsers(data.items)
                setCurrentPage(page)
                setIsFetchingUsers(false)
            })
        })
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
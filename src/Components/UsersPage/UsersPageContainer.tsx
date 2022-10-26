import {UsersPageType, UserType} from "../../redux/UsersPageReducer";
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
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
}

class UsersPageContainer extends Component<UsersPageContainerProps> {
    constructor(props: Readonly<UsersPageContainerProps>) {
        super(props)
        this.onSetFollowUserClick = this.onSetFollowUserClick.bind(this)
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

    onSetFollowUserClick(isFollowed: boolean, userId: number) {
        const {followUser, unfollowUser} = this.props
        isFollowed ? unfollowUser(userId) : followUser(userId)
    }

    onSetCurrentPageClick(page: number) {
        //TODO: performance issue - add logic to kill previous fetch of users when clicking another page.
        // Use abortController?
        const {usersPageData, setIsFetchingUsers, setUsers, setCurrentPage} = this.props

        setIsFetchingUsers(true)
        API.getUsers(usersPageData.pageSize, page).then(({data}) => {
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
                          onSetCurrentPageClick={this.onSetCurrentPageClick}
        />
    }
}

export default UsersPageContainer
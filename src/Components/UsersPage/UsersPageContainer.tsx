import {UsersPageType, UserType} from "../../redux/UsersPageReducer";
import {Component} from "react";
import * as API from "../../API"
import UsersPage from "./UsersPage";

type UsersPageContainerProps = {
    usersPageData: UsersPageType
    setUsers: (users: UserType[]) => void
    setUsersCount: (usersCount: number) => void
    setCurrentPage: (currentPage: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

class UsersPageContainer extends Component<UsersPageContainerProps> {
    constructor(props: Readonly<UsersPageContainerProps>) {
        super(props)
        this.onUserClick = this.onUserClick.bind(this)
        this.onSetCurrentPageClick = this.onSetCurrentPageClick.bind(this)
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

    onSetCurrentPageClick(page: number) {
        const {pageSize} = this.props.usersPageData
        API.getUsers(pageSize, page).then(({data}) => {
            this.props.setUsers(data.items)
            this.props.setCurrentPage(page)
        })
    }

    render() {
        return <UsersPage usersPageData={this.props.usersPageData}
                          onUserClick={this.onUserClick}
                          onSetCurrentPageClick={this.onSetCurrentPageClick}
        />
    }
}

export default UsersPageContainer
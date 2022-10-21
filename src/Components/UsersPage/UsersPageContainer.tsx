import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followUserAC, setUsersAC, unfollowUserAC, UsersPageActionsType, UserType} from "../../redux/UsersPageReducer";
import {connect} from "react-redux";
import UsersPage from "./UsersPage";

const mapStateToProps = (state: AppStateType) => ({
    users: state.usersPageData.users
})

const mapDispatchToProps = (dispatch: Dispatch<UsersPageActionsType>) => ({
    follow: (userId: number) => dispatch(followUserAC(userId)),
    unfollow: (userId: number) => dispatch(unfollowUserAC(userId)),
    setUsers: (users: UserType[]) => dispatch(setUsersAC(users))
})

const UsersPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersPage)

export default UsersPageContainer;
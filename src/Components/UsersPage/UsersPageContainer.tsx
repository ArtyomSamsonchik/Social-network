import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    followUserAC, setCurrentPageAC,
    setUsersAC,
    setUsersCountAC,
    unfollowUserAC,
    UsersPageActionsType
} from "../../redux/UsersPageReducer";
import {connect} from "react-redux";
import UsersPage from "./UsersPage";
import {MapToPropsType} from "../../helpers/typeHelpers";

const mapStateToProps = (state: AppStateType): MapToPropsType<UsersPage, "usersPageData"> => ({
    usersPageData: state.usersPageData
})

const mapDispatchToProps = (
    dispatch: Dispatch<UsersPageActionsType>
): MapToPropsType<UsersPage, "follow" | "unfollow" | "setUsers" | "setUsersCount" | "setCurrentPage"> => ({
    follow: (userId) => dispatch(followUserAC(userId)),
    unfollow: (userId) => dispatch(unfollowUserAC(userId)),
    setUsers: (users) => dispatch(setUsersAC(users)),
    setUsersCount: (usersCount) => dispatch(setUsersCountAC(usersCount)),
    setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage))
})

const UsersPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersPage)

export default UsersPageContainer;
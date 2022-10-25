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
import {MapToPropsType} from "../../helpers/typeHelpers";
import UsersPageContainer from "./UsersPageContainer";

const mapStateToProps = (state: AppStateType): MapToPropsType<UsersPageContainer, "usersPageData"> => ({
    usersPageData: state.usersPageData
})

const mapDispatchToProps = (
    dispatch: Dispatch<UsersPageActionsType>
): MapToPropsType<UsersPageContainer, "follow" | "unfollow" | "setUsers" | "setUsersCount" | "setCurrentPage"> => ({
    follow: (userId) => dispatch(followUserAC(userId)),
    unfollow: (userId) => dispatch(unfollowUserAC(userId)),
    setUsers: (users) => dispatch(setUsersAC(users)),
    setUsersCount: (usersCount) => dispatch(setUsersCountAC(usersCount)),
    setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage))
})

const ConnectedUsersPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersPageContainer)

export default ConnectedUsersPage;
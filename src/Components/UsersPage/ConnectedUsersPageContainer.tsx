import {AppStateType} from "../../redux/redux-store";
import {
    followUser, setCurrentPage, setIsFetchingUsers,
    setUsers,
    setUsersCount,
    unfollowUser
} from "../../redux/usersPageReducer";
import {connect} from "react-redux";
import {MapActionCreators, MapToPropsReturnType} from "../../helpers/typeHelpers";
import UsersPageContainer from "./UsersPageContainer";
import {setIsFetchingFollowedUsers} from "../../redux/sidebarPageReducer";

type mapDispatchKeys = "followUser"
    | "unfollowUser"
    | "setUsers"
    | "setUsersCount"
    | "setCurrentPage"
    | "setIsFetchingUsers"
    | "setIsFetchingFollowedUsers"

type MapStateRT = MapToPropsReturnType<UsersPageContainer, "usersPageData">
type MapAC = MapActionCreators<UsersPageContainer, mapDispatchKeys>

const mapStateToProps = (state: AppStateType): MapStateRT => ({
    usersPageData: state.usersPageData
})

const ConnectedUsersPageContainer = connect(mapStateToProps, {
    followUser,
    unfollowUser,
    setUsers,
    setUsersCount,
    setCurrentPage,
    setIsFetchingUsers,
    setIsFetchingFollowedUsers
} as MapAC)
(UsersPageContainer)

export default ConnectedUsersPageContainer;
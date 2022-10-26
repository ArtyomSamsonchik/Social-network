import {AppStateType} from "../../redux/redux-store";
import {
    followUser, setCurrentPage, setIsFetchingUsers,
    setUsers,
    setUsersCount,
    unfollowUser,
    UsersPageActionsType
} from "../../redux/UsersPageReducer";
import {connect} from "react-redux";
import {MapActionCreators, MapToPropsReturnType} from "../../helpers/typeHelpers";
import UsersPageContainer from "./UsersPageContainer";

type mapDispatchKeys = "followUser"
    | "unfollowUser"
    | "setUsers"
    | "setUsersCount"
    | "setCurrentPage"
    | "setIsFetchingUsers"

type MapStateRT = MapToPropsReturnType<UsersPageContainer, "usersPageData">
type MapAC = MapActionCreators<UsersPageContainer, mapDispatchKeys, UsersPageActionsType>

const mapStateToProps = (state: AppStateType): MapStateRT => ({
    usersPageData: state.usersPageData
})

const ConnectedUsersPageContainer = connect(mapStateToProps, {
    followUser,
    unfollowUser,
    setUsers,
    setUsersCount,
    setCurrentPage,
    setIsFetchingUsers
} as MapAC)
(UsersPageContainer)

export default ConnectedUsersPageContainer;
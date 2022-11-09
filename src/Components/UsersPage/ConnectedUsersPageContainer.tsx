import {AppStateType} from "../../redux/redux-store";
import {follow, getUsers, unfollow} from "../../redux/usersPageReducer";
import {connect} from "react-redux";
import {MapActionCreators, MapToPropsReturnType} from "../../helpers/typeHelpers";
import UsersPageContainer from "./UsersPageContainer";

type MapStateRT = MapToPropsReturnType<UsersPageContainer, "usersPageData">
type MapAC = MapActionCreators<UsersPageContainer, "getUsers" | "follow" | "unfollow">

const mapStateToProps = (state: AppStateType): MapStateRT => ({
    usersPageData: state.usersPageData
})

const ConnectedUsersPageContainer = connect(mapStateToProps, {
    getUsers,
    follow,
    unfollow
} as MapAC)
(UsersPageContainer)

export default ConnectedUsersPageContainer;
import {MapActionCreators, MapToPropsReturnType} from "../../../helpers/typeHelpers";
import FriendsContainer from "./FriendsContainer";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {getFollowedUsers} from "../../../redux/sidebarPageReducer";

type MappedState = MapToPropsReturnType<typeof FriendsContainer, "sidebarPageData">
type MappedAC = MapActionCreators<typeof FriendsContainer, "getFollowedUsers">

const mapStateToProps = (state: AppStateType): MappedState => ({
    sidebarPageData: state.sidebarPageData
})

export const ConnectedFriendsContainer = connect(mapStateToProps, {
    getFollowedUsers
} as MappedAC)(FriendsContainer)
import {MapActionCreators, MapToPropsReturnType} from "../../../helpers/typeHelpers";
import FriendsContainer from "./FriendsContainer";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {setFollowedUsers, setIsFetchingFollowedUsers} from "../../../redux/sidebarPageReducer";

type MappedState = MapToPropsReturnType<FriendsContainer, "sidebarPageData">
type MappedAC = MapActionCreators<FriendsContainer, "setFollowedUsers" | "setIsFetchingFollowedUsers">

const mapStateToProps = (state: AppStateType): MappedState => ({
    sidebarPageData: state.sidebarPageData
})

export const ConnectedFriendsContainer = connect(mapStateToProps, {
    setFollowedUsers,
    setIsFetchingFollowedUsers
} as MappedAC)(FriendsContainer)
import MainPageContainer from "./MainPageContainer";
import {MapActionCreators, MapToPropsReturnType} from "../../helpers/typeHelpers";
import {AppStateType} from "../../redux/redux-store";
import {getUserStatus, getUserProfile, updateStatus} from "../../redux/mainPageReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import withRedirect from "../../helpers/withRedirect";
import {ComponentType} from "react";
import {compose} from "redux";

type MappedState = MapToPropsReturnType<typeof MainPageContainer, "profile" | "authUserId" | "status">
type MappedAC = MapActionCreators<typeof MainPageContainer, "getUserProfile" | "getUserStatus" | "updateStatus">

const mapStateToProps = (state: AppStateType): MappedState => ({
    profile: state.mainPageData.profile,
    authUserId: state.authData.userId,
    status: state.mainPageData.status
})

const ConnectedMainPageContainer = compose<ComponentType>(
    withRedirect,
    connect(
        mapStateToProps,
        {getUserProfile, getUserStatus, updateStatus} as MappedAC
    ),
    withRouter
)(MainPageContainer)

export default ConnectedMainPageContainer
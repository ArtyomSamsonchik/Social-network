import MainPageContainer from "./MainPageContainer";
import {MapActionCreators, MapToPropsReturnType} from "../../helpers/typeHelpers";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile} from "../../redux/mainPageReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import withRedirect from "../../helpers/withRedirect";
import {ComponentType} from "react";
import {compose} from "redux";

type MappedState = MapToPropsReturnType<typeof MainPageContainer, "profile" | "authUserId">
type MappedAC = MapActionCreators<typeof MainPageContainer, "getUserProfile">

const mapStateToProps = (state: AppStateType): MappedState => ({
    profile: state.mainPageData.profile,
    authUserId: state.authData.userId
})

const ConnectedMainPageContainer = compose<ComponentType>(
    withRedirect,
    connect(mapStateToProps, {getUserProfile} as MappedAC),
    withRouter
)(MainPageContainer)

// const WrappedMainPageContainer = withRedirect(withRouter(MainPageContainer))

// const ConnectedMainPageContainer = connect(mapStateToProps, {
//     getUserProfile
// } as MappedAC)
// (WrappedMainPageContainer)


export default ConnectedMainPageContainer
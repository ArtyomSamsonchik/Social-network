import MainPageContainer from "./MainPageContainer";
import {MapActionCreators, MapToPropsReturnType} from "../../helpers/typeHelpers";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile} from "../../redux/mainPageReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import withRedirect from "../../helpers/withRedirect";

type MapStateKeys = "profile" | "isAuthenticated" | "authInProgress"
type MappedState = MapToPropsReturnType<typeof WrappedMainPageContainer, MapStateKeys>
type MappedAC = MapActionCreators<typeof MainPageContainer, "getUserProfile">

const mapStateToProps = (state: AppStateType): MappedState => ({
    profile: state.mainPageData.profile,
    isAuthenticated: state.authData.loggedIn,
    authInProgress: state.authData.authInProgress
})

const WrappedMainPageContainer = withRedirect(withRouter(MainPageContainer))

const ConnectedMainPageContainer = connect(mapStateToProps, {
    getUserProfile
} as MappedAC)
(WrappedMainPageContainer)

// const ConnectedMainPageContainer = compose(
//     connect(mapStateToProps, {getUserProfile}),
//     withRedirect,
//     withRouter
// )(MainPageContainer) as ComponentType

export default ConnectedMainPageContainer
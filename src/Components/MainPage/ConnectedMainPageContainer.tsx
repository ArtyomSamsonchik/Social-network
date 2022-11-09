import MainPageContainer from "./MainPageContainer";
import {MapActionCreators, MapToPropsReturnType} from "../../helpers/typeHelpers";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile} from "../../redux/mainPageReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import withRedirect from "../../helpers/withRedirect";

type MappedState = MapToPropsReturnType<typeof WrappedMainPageContainer, "profile" | "isAuthenticated">
type MappedAC = MapActionCreators<typeof MainPageContainer, "getUserProfile">

const mapStateToProps = (state: AppStateType): MappedState => ({
    profile: state.mainPageData.profile,
    isAuthenticated: state.authData.loggedIn
})

const WrappedMainPageContainer = withRedirect(withRouter(MainPageContainer))

const ConnectedMainPageContainer = connect(mapStateToProps, {
    getUserProfile
} as MappedAC)
(WrappedMainPageContainer)

export default ConnectedMainPageContainer
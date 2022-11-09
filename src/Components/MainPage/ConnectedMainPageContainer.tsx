import MainPageContainer from "./MainPageContainer";
import {MapActionCreators, MapToPropsReturnType} from "../../helpers/typeHelpers";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile} from "../../redux/mainPageReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

type MappedState = MapToPropsReturnType<MainPageContainer, "profile">
type MappedAC = MapActionCreators<MainPageContainer, "getUserProfile">

const mapStateToProps = (state: AppStateType): MappedState => ({
    profile: state.mainPageData.profile
})

const MainPageContainerWithRouter = withRouter(MainPageContainer)

const ConnectedMainPageContainer = connect(mapStateToProps, {
    getUserProfile
} as MappedAC)
(MainPageContainerWithRouter)

export default ConnectedMainPageContainer
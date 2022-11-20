import {MapActionCreators, MapToPropsReturnType} from "../../../helpers/typeHelpers";
import AuthBar from "./AuthBar";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {authorize, logout} from "../../../redux/authReducer";

type MappedState = MapToPropsReturnType<typeof AuthBar, "authData">
type MappedAC = MapActionCreators<typeof AuthBar, "logout" | "authorize">

const mapStateToProps = (state: AppStateType): MappedState => ({
    authData: state.authData
})

const ConnectedAuthBar = connect(
    mapStateToProps, {logout, authorize} as MappedAC
)(AuthBar)

export default ConnectedAuthBar
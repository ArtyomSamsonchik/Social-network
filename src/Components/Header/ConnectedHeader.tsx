import {MapActionCreators, MapToPropsReturnType} from "../../helpers/typeHelpers";
import {AppStateType} from "../../redux/redux-store";
import {AuthActionsType, authorize} from "../../redux/authReducer";
import {connect} from "react-redux";
import HeaderContainer from "./HeaderContainer";

type MappedState = MapToPropsReturnType<HeaderContainer, "authData">
type MappedAC = MapActionCreators<HeaderContainer, "authorize", AuthActionsType>

const mapStataToProps = (state: AppStateType): MappedState => ({
    authData: state.authData
})

export const ConnectedHeader = connect(mapStataToProps, {
    authorize
} as MappedAC)(HeaderContainer)
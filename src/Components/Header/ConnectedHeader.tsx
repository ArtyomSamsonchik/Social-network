import {MapActionCreators, MapToPropsReturnType} from "../../helpers/typeHelpers";
import {AppStateType} from "../../redux/redux-store";
import {AuthActionsType, setUserAuthData} from "../../redux/authReducer";
import {connect} from "react-redux";
import HeaderContainer from "./HeaderContainer";

type MappedState = MapToPropsReturnType<HeaderContainer, "authData">
type MappedAC = MapActionCreators<HeaderContainer, "setUserAuthData", AuthActionsType>

const mapStataToProps = (state: AppStateType): MappedState => ({
    authData: state.authData
})

export const ConnectedHeader = connect(mapStataToProps, {
    setUserAuthData
} as MappedAC)(HeaderContainer)
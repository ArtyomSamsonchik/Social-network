import {MapActionCreators, MapToPropsReturnType} from "../../helpers/typeHelpers";
import {AppStateType} from "../../redux/redux-store";
import {AuthActionsType, authorize} from "../../redux/authReducer";
import {connect} from "react-redux";
import HeaderContainer from "./HeaderContainer";

type MappedState = MapToPropsReturnType<typeof HeaderContainer, "authData">
type MappedAC = MapActionCreators<typeof HeaderContainer, "authorize", AuthActionsType>

const mapStataToProps = (state: AppStateType): MappedState => ({
    authData: state.authData
})

export const ConnectedHeader = connect(mapStataToProps, {
    authorize
} as MappedAC)(HeaderContainer)
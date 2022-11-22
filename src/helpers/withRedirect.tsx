import {ComponentType, FC} from "react";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import Preloader from "../Components/common/Preloader/Preloader";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";
import {AuthProgressType} from "../redux/authReducer";
import {PATH} from "../App";

type MappedStateProps = { authProgress: AuthProgressType }
type WrapperProps = MappedStateProps & RouteComponentProps

const mapStateToProps = (state: AppStateType): MappedStateProps => ({
    authProgress: state.authData.authProgress
})

function withRedirect<P>(WrappedComponent: ComponentType<P>) {
    const ComponentWithRedirect: FC<WrapperProps> = (props) => {
        const {authProgress, history, match, staticContext, location, ...restProps} = props

        console.log(location.pathname, authProgress)
        if (authProgress === "pending") {
            return (
                <>
                    <h1>Wait for the login process to complete, please</h1>
                    <Preloader/>
                </>
            )
        }

        return authProgress === "loggedIn"
            ? <WrappedComponent {...restProps as P}/>
            : <Redirect to={{pathname: PATH.LOGIN, state: {from: location.pathname}}}/>
    }

    return connect(mapStateToProps)(
        withRouter(ComponentWithRedirect)
    )
}

export default withRedirect
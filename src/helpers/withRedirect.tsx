import {ComponentType, FC} from "react";
import {Redirect} from "react-router-dom";
import Preloader from "../Components/common/Preloader/Preloader";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";

type WithRedirectProps = {
    isAuthenticated: boolean
    authInProgress: boolean
}

const mapStateToProps = (state: AppStateType): WithRedirectProps => ({
    isAuthenticated: state.authData.loggedIn,
    authInProgress: state.authData.authInProgress
})

function withRedirect<P>(WrappedComponent: ComponentType<P>) {
    const ComponentWithRedirect: FC<WithRedirectProps> = (props) => {
        const {isAuthenticated, authInProgress, ...restProps} = props

        if (authInProgress) {
            return (
                <>
                    <h1>Wait for the login process to complete, please</h1>
                    <Preloader/>
                </>
            )
        }

        return isAuthenticated
            ? <WrappedComponent {...restProps as P}/>
            : <Redirect to={"/login"}/>
    }

    return connect(mapStateToProps)(ComponentWithRedirect)
}

export default withRedirect
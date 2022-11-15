import {ComponentType, FC} from "react";
import {Redirect} from "react-router-dom";
import Preloader from "../Components/common/Preloader/Preloader";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";
import {AuthProgressType} from "../redux/authReducer";

type WithRedirectProps = {
    authProgress: AuthProgressType
}

const mapStateToProps = (state: AppStateType): WithRedirectProps => ({
    authProgress: state.authData.authProgress
})

function withRedirect<P>(WrappedComponent: ComponentType<P>) {
    const ComponentWithRedirect: FC<WithRedirectProps> = (props) => {
        const {authProgress, ...restProps} = props

        if (authProgress === "pending") {
            return (
                <>
                    <h1>Wait for the login process to complete, please</h1>
                    <Preloader/>
                </>
            )
        }

        return authProgress === "success"
            ? <WrappedComponent {...restProps as P}/>
            : <Redirect to={"/login"}/>
    }

    return connect(mapStateToProps)(ComponentWithRedirect)
}

export default withRedirect
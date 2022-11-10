import {ComponentType, FC} from "react";
import {Redirect} from "react-router-dom";
import Preloader from "../Components/common/Preloader/Preloader";

type WithRedirectProps = {
    isAuthenticated: boolean
    authInProgress: boolean
}

const WithRedirect = <P extends {}>(WrappedComponent: ComponentType<P>) => {
    const ComponentWithRedirect: FC<P & WithRedirectProps> = (props) => {
        const {isAuthenticated, ...restProps} = props

        if (props.authInProgress) {
            return (
                <>
                    <h1>Wait for the login process to complete, please</h1>
                    <Preloader/>
                </>
            )
        }

        return (
            props.isAuthenticated
                ? <WrappedComponent {...restProps as P}/>
                : <Redirect to={"/login"}/>
        )
    }

    return ComponentWithRedirect
}

export default WithRedirect
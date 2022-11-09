import {ComponentType, FC} from "react";
import {Redirect} from "react-router-dom";

type WithRedirectProps = {
    isAuthenticated: boolean
}

const WithRedirect = <P extends {}>(WrappedComponent: ComponentType<P>) => {
    const ComponentWithRedirect: FC<P & WithRedirectProps> = (props) => {
        const {isAuthenticated, ...restProps} = props

        console.log("with redirect rendering")
        return (
            props.isAuthenticated
                ? <WrappedComponent {...restProps as P}/>
                : <Redirect to={"/login"}/>
        )
    }

    return ComponentWithRedirect
}

export default WithRedirect
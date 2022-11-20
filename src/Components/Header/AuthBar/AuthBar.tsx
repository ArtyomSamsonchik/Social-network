import React, {FC} from 'react';
import s from "./AuthBar.module.css"
import {AuthDataType} from "../../../redux/authReducer";
import {Redirect} from "react-router-dom";

type AuthProps = {
    authData: AuthDataType
    logout: () => void
}

const AuthBar: FC<AuthProps> = (props) => {
    const {authProgress, login} = props.authData

    let message
    if (authProgress === "pending") message = "Logging in..."
    else if (authProgress === "loggedIn") message = `Hello, ${login}`
    else message = "Unauthorized"


    return (
        <div className={s.auth_bar}>
            <span className={s.auth_message}>{message}</span>
            {authProgress === "loggedIn"
                ? <button onClick={() => props.logout()}>Logout</button>
                : <Redirect to="/login"/>
            }
        </div>
    )

}
export default AuthBar

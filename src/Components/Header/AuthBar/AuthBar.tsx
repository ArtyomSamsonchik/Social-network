import React, {FC, useEffect} from 'react';
import s from "./AuthBar.module.css"
import {AuthDataType} from "../../../redux/authReducer";
import {NavLink} from "react-router-dom";

type AuthProps = {
    authData: AuthDataType
    authorize: () => void
    logout: () => void
}

const AuthBar: FC<AuthProps> = (props) => {
    const {authData: {authProgress, login}, authorize} = props

    let message
    if (authProgress === "pending") message = "Logging in..."
    else if (authProgress === "loggedIn") message = `Hello, ${login}`
    else message = "Unauthorized"

    useEffect(() => {
        authorize()
    }, [authorize])

    return (
        <div className={s.auth_bar}>
            <span className={s.auth_message}>{message}</span>
            {authProgress === "loggedIn"
                ? <button onClick={() => props.logout()}>Logout</button>
                : <NavLink className={s.link} to="/login">Login</NavLink>
            }
        </div>
    )

}
export default AuthBar

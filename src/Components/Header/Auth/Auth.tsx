import React, {FC} from 'react';
import s from "./Auth.module.css"
import {AuthDataType} from "../../../redux/authReducer";

type AuthProps = {
    authData: AuthDataType
}

const Auth: FC<AuthProps> = (props) => {
    const {loggedIn, login} = props.authData

    return <div className={s.auth}>{!loggedIn ? "Login" : `Hello, ${login}`}</div>
}

export default Auth
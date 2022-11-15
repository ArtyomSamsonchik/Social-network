import React, {FC} from 'react';
import s from "./Auth.module.css"
import {AuthDataType} from "../../../redux/authReducer";

type AuthProps = {
    authData: AuthDataType
}

const Auth: FC<AuthProps> = (props) => {
    const {authProgress, login} = props.authData

    return <div className={s.auth}>{authProgress === "success" ? `Hello, ${login}` : "Login"}</div>
}

export default Auth
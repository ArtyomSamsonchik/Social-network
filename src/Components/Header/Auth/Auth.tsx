import React, {FC} from 'react';
import s from "./Auth.module.css"

type AuthProps = {
    userId: number | null
}

const Auth: FC<AuthProps> = (props) => {
    return (
        <div className={s.auth}>
            {props.userId ? "Logged in" : "Login"}
        </div>
    )
}

export default Auth
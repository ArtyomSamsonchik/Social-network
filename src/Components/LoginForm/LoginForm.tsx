import React, {FC} from 'react';
import {Field, reduxForm} from "redux-form";
import {InjectedFormProps} from "redux-form/lib/reduxForm";
import s from "./LoginForm.module.css"

export type LoginFormData = {
    email: string
    password: string
    rememberMe: boolean
}

type LoginFormProps = {} & InjectedFormProps<LoginFormData>

const LoginForm: FC<LoginFormProps> = (props) => {
    const {pristine, submitting, invalid} = props

    return (
        <div className={s.login_form}>
            <form onSubmit={props.handleSubmit}>
                <label className={s.label}>
                    <span>Email:</span>
                    <Field name={"email"} component={"input"}/>
                </label>
                <label className={s.label}>
                    <span>Password:</span>
                    <Field name={"password"} component={"input"} type={"password"}/>
                </label>
                <label className={s.checkbox_label}>
                    <Field name={"rememberMe"} component={"input"} type="checkbox"/>
                    <span>Remember me</span>
                </label>
                <button className={s.button}
                        disabled={pristine || invalid || submitting}
                        type={"submit"}
                >Submit
                </button>
            </form>
        </div>
    )
}

const ReduxLoginForm = reduxForm<LoginFormData>({
    form: "login"
})(LoginForm)

export default ReduxLoginForm
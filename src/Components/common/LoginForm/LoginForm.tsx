import React, {FC, InputHTMLAttributes} from 'react';
import {Field, reduxForm, WrappedFieldProps} from "redux-form";
import {InjectedFormProps} from "redux-form/lib/reduxForm";
import s from "./LoginForm.module.css"
import {email, maxLength, minLength, required} from "../../../helpers/validators";

export type LoginFormData = {
    email: string
    password: string
    rememberMe: boolean
}

type OwnProps = {}
type LoginFormProps = OwnProps & InjectedFormProps<LoginFormData>
type RenderFieldProps = WrappedFieldProps & InputHTMLAttributes<HTMLInputElement>

const RenderField: FC<RenderFieldProps> = (props) => {
    const {input, meta: {touched, error}, ...restProps} = props

    return (
        <div>
            <label className={s.label}>
                <span>Email:</span>
                <input className={error ? s.error: ""} {...input} {...restProps}/>
            </label>
            {touched && error && <div className={s.error_message}>{error}</div>}
        </div>
    )
}

const minLength4 = minLength(4)
const maxLength15 = maxLength(15)

const LoginForm: FC<LoginFormProps> = (props) => {
    const {pristine, submitting, invalid} = props

    return (
        <div className={s.login_form}>
            <form onSubmit={props.handleSubmit}>
                <Field name={"email"} component={RenderField} validate={[required, email]}/>
                <Field name={"password"} component={RenderField} type={"password"}
                       validate={[required, minLength4, maxLength15]}
                />
                <Field name={"rememberMe"} component={RenderField} type="checkbox"/>
                <button className={s.button}
                        disabled={pristine || invalid || submitting}
                        type={"submit"}
                >Submit
                </button>
            </form>
        </div>
    )
}
export default reduxForm<LoginFormData, OwnProps>({
    form: "login"
})(LoginForm)
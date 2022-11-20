import React, {FC} from 'react';
import {AuthProgressType, login} from "../../redux/authReducer";
import LoginForm, {LoginFormData} from "../common/LoginForm/LoginForm";
import {FormSubmitHandler} from "redux-form/lib/reduxForm";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";

type LoginPageProps = {
    authProgress: AuthProgressType
}

const mapStateToProps = (state: AppStateType): LoginPageProps => ({
    authProgress: state.authData.authProgress
})

const LoginPage: FC<LoginPageProps> = (props) => {
    const onSubmitHandler: FormSubmitHandler<LoginFormData> = (values, dispatch) => {
        return new Promise(res => {
            dispatch(login(values, res))
        })
    }

    return props.authProgress === "loggedIn"
        ? <Redirect to="/main-page"/>
        : <LoginForm onSubmit={onSubmitHandler}/>

}

const ConnectedLoginPage = connect(mapStateToProps)(LoginPage)

export default ConnectedLoginPage
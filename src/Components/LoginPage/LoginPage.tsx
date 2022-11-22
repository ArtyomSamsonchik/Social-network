import React, {FC} from 'react';
import {AuthProgressType, login} from "../../redux/authReducer";
import LoginForm, {LoginFormData} from "../common/LoginForm/LoginForm";
import {FormSubmitHandler} from "redux-form/lib/reduxForm";
import {History, Location} from 'history'
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";

export type LocationState = Location<{ from: string }>
type OwnProps = {
    history: History
    location: Location<{ from: string | undefined }>
}

type MappedStateProps = { authProgress: AuthProgressType }
type LoginPageProps = OwnProps & MappedStateProps

const mapStateToProps = (state: AppStateType): MappedStateProps => ({
    authProgress: state.authData.authProgress
})

const LoginPage: FC<LoginPageProps> = (props) => {
    const {history, location} = props

    const onSubmitHandler: FormSubmitHandler<LoginFormData> = (values, dispatch) => {
        dispatch(login(values))

        if (location.state?.from) history.replace(location.state?.from)
        else history.goBack()
    }

    return <LoginForm onSubmit={onSubmitHandler}/>

}

const ConnectedLoginPage = connect(mapStateToProps)(LoginPage)

export default ConnectedLoginPage
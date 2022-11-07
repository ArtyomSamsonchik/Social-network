import React, {Component} from 'react';
import {AuthDataType} from "../../redux/authReducer";
import {Header} from "./Header";
import * as API from "../../API";

type HeaderContainerProps = {
    authData: AuthDataType
    setUserAuthData: (loginData: Omit<AuthDataType, "loggedIn">) => void
}

class HeaderContainer extends Component<HeaderContainerProps> {
    componentDidMount() {
        API.getUserAuthData().then(({data}) => {
            const {id: userId, login, email} = data.data

            if (data.resultCode === 0) {
                this.props.setUserAuthData({userId, login, email})
            }
        })
    }

    render() {
        return <Header authData={this.props.authData}/>
    }
}

export default HeaderContainer
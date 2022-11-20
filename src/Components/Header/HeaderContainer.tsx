import React, {Component} from 'react';
import {AuthDataType} from "../../redux/authReducer";
import {Header} from "./Header";

type HeaderContainerProps = {
    authData: AuthDataType
    authorize: () => void
    logout: () => void
}

class HeaderContainer extends Component<HeaderContainerProps> {
    componentDidMount() {
        this.props.authorize()
    }

    render() {
        return <Header authData={this.props.authData} logout={this.props.logout}/>
    }
}

export default HeaderContainer
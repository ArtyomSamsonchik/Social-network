import React, {Component} from 'react';
import {AuthDataType} from "../../redux/authReducer";
import {Header} from "./Header";

type HeaderContainerProps = {
    authData: AuthDataType
    authorize: () => void
}

class HeaderContainer extends Component<HeaderContainerProps> {
    componentDidMount() {
        this.props.authorize()
    }

    render() {
        return <Header authData={this.props.authData}/>
    }
}

export default HeaderContainer
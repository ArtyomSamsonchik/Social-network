import React, {Component} from 'react';
import {MainPage} from "./MainPage";
import {ProfileType} from "../../redux/mainPageReducer";
import {RouteComponentProps} from "react-router-dom";

type MainPageContainerProps = {
    profile: ProfileType
    getUserProfile: (newUserId: number, currentUserId: number) => void
} & RouteComponentProps<{ userId?: string }>

class MainPageContainer extends Component<MainPageContainerProps> {
    componentDidMount() {
        const userId = Number(this.props.match.params.userId) || 2
        const {getUserProfile, profile} = this.props

        getUserProfile(userId, Number(profile?.userId))
    }

    render() {
        return (
            <MainPage profile={this.props.profile}/>
        )
    }
}

export default MainPageContainer
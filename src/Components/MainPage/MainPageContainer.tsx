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
        const {getUserProfile, profile, match: {params}} = this.props
        const userId = Number(params.userId) || profile?.userId || 2

        getUserProfile(userId, Number(profile?.userId))
    }

    render() {
        return (
            <MainPage profile={this.props.profile}/>
        )
    }
}

export default MainPageContainer
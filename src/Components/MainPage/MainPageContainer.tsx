import React, {Component} from 'react';
import {MainPage} from "./MainPage";
import {ProfileType} from "../../redux/mainPageReducer";
import {RouteComponentProps} from "react-router-dom";

type MainPageContainerProps = {
    profile: ProfileType
    authUserId: number | null
    getUserProfile: (newUserId: number) => void
} & RouteComponentProps<{ userId?: string }>

class MainPageContainer extends Component<MainPageContainerProps> {
    componentDidMount() {
        const {getUserProfile, profile, match: {params}, authUserId} = this.props

        //set userId = 2 (Dimych profile) to test profile info with amount of data
        const userId = Number(params.userId) || Number(authUserId)

        if (userId !== profile?.userId) {
            getUserProfile(userId)
        }
    }

    render() {
        return (
            <MainPage profile={this.props.profile}/>
        )
    }
}

export default MainPageContainer
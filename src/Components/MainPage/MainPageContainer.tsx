import React, {Component} from 'react';
import {MainPage} from "./MainPage";
import {ProfileType} from "../../redux/mainPageReducer";
import {RouteComponentProps} from "react-router-dom";

type MainPageContainerProps = {
    profile: ProfileType
    status: string | null
    authUserId: number | null
    getUserProfile: (newUserId: number) => void
    getUserStatus: (userId: number) => void
    updateStatus: (status: string) => void
} & RouteComponentProps<{ userId?: string }>

class MainPageContainer extends Component<MainPageContainerProps> {
    componentDidMount() {
        const {getUserProfile, getUserStatus, profile, match: {params}, authUserId} = this.props

        //set userId = 2 (Dimych profile) to test profile info with amount of data
        const userId = Number(params.userId) || Number(authUserId)

        if (userId !== profile?.userId) {
            getUserProfile(userId)
            getUserStatus(userId)
        }
    }

    render() {
        const {profile, status, updateStatus} = this.props
        return (
            <MainPage profile={profile} status={status} updateStatus={updateStatus}/>
        )
    }
}

export default MainPageContainer
import React, {Component} from 'react';
import {MainPage} from "./MainPage";
import {ProfileType} from "../../redux/mainPageReducer";
import * as API from "../../API";
import {RouteComponentProps} from "react-router-dom";

type MainPageContainerProps = {
    profile: ProfileType
    setUserProfile: (profile: ProfileType) => void
} & RouteComponentProps<{ userId?: string }>

class MainPageContainer extends Component<MainPageContainerProps> {
    componentDidMount() {
        const userId = Number(this.props.match.params.userId) || 2
        const {profile, setUserProfile} = this.props

        if (userId === profile?.userId) return

        API.getProfile(userId).then(({data}) => {
            setUserProfile(data)
        })
        window.scrollTo({top: 0})
    }

    render() {
        return (
            <MainPage profile={this.props.profile}/>
        )
    }
}

export default MainPageContainer
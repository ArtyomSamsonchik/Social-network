import React, {FC} from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import ConnectedMyPosts from "./PostsContainer/ConnectedMyPosts";
import {ProfileType} from "../../redux/mainPageReducer";
import Preloader from "../common/Preloader/Preloader";

type MainPageProps = {
    profile: ProfileType
    status: string | null
    updateStatus: (status: string) => void
}

export const MainPage: FC<MainPageProps> = (props) => {
    const {profile, status, updateStatus} = props

    return (
        props.profile
            ? <>
                <ProfileInfo profile={profile} status={status} updateStatus={updateStatus}/>
                <ConnectedMyPosts/>
            </>
            : <Preloader/>
    )
}
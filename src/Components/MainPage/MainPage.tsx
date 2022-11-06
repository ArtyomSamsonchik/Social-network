import React, {FC} from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import ConnectedMyPosts from "./PostsContainer/ConnectedMyPosts";
import {ProfileType} from "../../redux/mainPageReducer";
import Preloader from "../common/Preloader/Preloader";

type MainPageProps = {
    profile: ProfileType
}

export const MainPage: FC<MainPageProps> = (props) => {
    return (
        <>
            {props.profile
                ? <ProfileInfo profile={props.profile}/>
                : <Preloader/>
            }
            <ConnectedMyPosts/>
        </>
    );
};
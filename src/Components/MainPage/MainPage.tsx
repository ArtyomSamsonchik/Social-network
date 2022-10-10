import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./PostsContainer/MyPostsContainer";
import {AppStoreType} from "../../redux/redux-store";

type MainPageProps = {
    store: AppStoreType
}

export const MainPage: React.FC<MainPageProps> = (props) => {
    return (
        <div>
            Main content
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    );
};
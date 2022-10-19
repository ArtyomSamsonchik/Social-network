import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./PostsContainer/MyPostsContainer";

export const MainPage = () => {
    return (
        <div>
            Main content
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
};
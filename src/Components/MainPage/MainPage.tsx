import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import ConnectedMyPosts from "./PostsContainer/ConnectedMyPosts";

export const MainPage = () => {
    return (
        <div>
            Main content
            <ProfileInfo/>
            <ConnectedMyPosts/>
        </div>
    );
};
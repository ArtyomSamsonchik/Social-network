import React from "react";
// import s from "./MainPage.module.css";
import {ProfileInfo} from "../ProfileInfo/ProfileInfo";
import {PostsContainer} from "../PostsContainer/PostsContainer";

export const MainPage = () => {
    return (
        <div>
            Main content
            <ProfileInfo/>
            <PostsContainer/>
        </div>
    );
};
import React from "react";
// import s from "./MainPage.module.css";
import {Profile} from "../ProfileInfo/Profile";
import {PostsContainer} from "../PostsContainer/PostsContainer";

export const MainPage = () => {
    return (
        <div>
            Main content
            <Profile/>
            <div>
                What's new...
                <PostsContainer/>
            </div>
        </div>
    )
}
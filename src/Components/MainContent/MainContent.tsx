import React from "react";
import s from "./MainContent.module.css";
import {Profile} from "../ProfileInfo/Profile";
import {PostsContainer} from "../PostsContainer/PostsContainer";

export const MainContent = () => {
    return (
        <div className={s.main_content}>
            Main content
            <Profile/>
            <div>
                What's new...
                <PostsContainer/>
            </div>
        </div>
    )
}
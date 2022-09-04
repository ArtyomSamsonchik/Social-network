import React from "react";
// import s from "./MainPage.module.css";
import {ProfileInfo} from "../ProfileInfo/ProfileInfo";
import {PostsContainer} from "../PostsContainer/PostsContainer";
import {PostType} from "../../App";

type MainPageProps = {
    posts: PostType[]
}

export const MainPage: React.FC<MainPageProps> = (props) => {
    return (
        <div>
            Main content
            <ProfileInfo/>
            <PostsContainer posts={props.posts}/>
        </div>
    );
};
import React from "react";
// import s from "./MainPage.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsContainer} from "./PostsContainer/PostsContainer";
import {MainPageType} from "../../redux/state";

type MainPageProps = {
    pageData: MainPageType
}

export const MainPage: React.FC<MainPageProps> = (props) => {
    return (
        <div>
            Main content
            <ProfileInfo/>
            <PostsContainer posts={props.pageData.posts}/>
        </div>
    );
};
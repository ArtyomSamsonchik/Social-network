import React from "react";
// import s from "./MainPage.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsContainer} from "./PostsContainer/PostsContainer";
import {ActionsType, MainPageType} from "../../redux/store";

type MainPageProps = {
    pageData: MainPageType
    dispatch: (action: ActionsType) => void
}

export const MainPage: React.FC<MainPageProps> = (props) => {
    return (
        <div>
            Main content
            <ProfileInfo/>
            <PostsContainer posts={props.pageData.posts}
                            dispatch={props.dispatch}
            />
        </div>
    );
};
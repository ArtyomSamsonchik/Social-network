import React from "react";
import {addPostAC} from "../../../redux/mainPageReducer";
import {MyPosts} from "./MyPosts";
import {AppStoreType} from "../../../redux/redux-store";

type PostsContainerProps = {
    store: AppStoreType
}

export const MyPostsContainer: React.FC<PostsContainerProps> = (props) => {
    const state = props.store.getState()

    const addPost = (text: string) => {
        props.store.dispatch(addPostAC(text))
    }

    return (
        <MyPosts posts={state.mainPageData.posts} addPost={addPost}/>
    )
}
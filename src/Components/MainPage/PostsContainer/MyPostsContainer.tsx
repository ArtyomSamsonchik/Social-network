import React, {useContext} from "react";
import {addPostAC} from "../../../redux/mainPageReducer";
import {MyPosts} from "./MyPosts";
import {GlobalStoreDispatchContext} from "../../../context/context";

// type PostsContainerProps = {
//     store: AppStoreType
// }

export const MyPostsContainer = () => {
    // const state = props.store.getState()
    const dispatch = useContext(GlobalStoreDispatchContext)

    const addPost = (text: string) => {
        dispatch(addPostAC(text))
    }

    return (
        <MyPosts addPost={addPost}/>
    )
}
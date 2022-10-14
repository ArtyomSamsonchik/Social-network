import React, {useContext} from "react";
import s from "./MyPostsContainer.module.css";
import {Post} from "./Post/Post";
import {AddItemArea} from "../../common/AddItemArea/AddItemArea";
import {GlobalStoreStateContext} from "../../../context/context";

type MyPostsProps = {
    // posts: PostType[]
    addPost: (test: string) => void
}

export const MyPosts: React.FC<MyPostsProps> = (props) => {
    const posts = useContext(GlobalStoreStateContext).mainPageData.posts

    const postItems = posts.map((post, i) => {
        return (
            <Post key={"post " + i}
                  userName={post.user.name}
                  imageSrc={post.user.imageSrc}
                  postText={post.postText}
                  likesCount={post.likesCount}
                  date={post.date}
            />
        )
    })

    return (
        <div className={s.posts_container}>
            <div>Add new post:</div>
            <AddItemArea placeholder={"Add new post..."}
                         addItem={props.addPost}
            />
            {postItems}
        </div>
    )
}
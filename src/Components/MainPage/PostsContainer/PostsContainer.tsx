import React from "react";
import s from "./PostsContainer.module.css";
import {Post} from "./Post/Post";
import {AddNewPost} from "./AddNewPost/AddNewPost";
import {PostType} from "../../../redux/state";

type PostsContainerProps = {
    posts: PostType[]
}

export const PostsContainer: React.FC<PostsContainerProps> = (props) => {
    const postItems = props.posts.map(post => {
        return (
            <Post userName={post.userName}
                  imageSrc={post.imageSrc}
                  postText={post.postText}
                  likesCount={post.likesCount}
                  date={post.date}
            />
        );
    });

    return (
        <div className={s.posts_container}>
            What's new...
            <AddNewPost/>
            {postItems}
        </div>
    );
};
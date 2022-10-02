import React from "react";
import s from "./PostsContainer.module.css";
import {Post} from "./Post/Post";
import {AddItemArea} from "../../common/AddItemArea/AddItemArea";
import {PostType} from "../../../redux/store";

type PostsContainerProps = {
    posts: PostType[]
    addPost: (postText: string) => void
}

export const PostsContainer: React.FC<PostsContainerProps> = (props) => {
    const postItems = props.posts.map((post, i) => {
        return (
            <Post key={"post " + i}
                  userName={post.user.name}
                  imageSrc={post.user.imageSrc}
                  postText={post.postText}
                  likesCount={post.likesCount}
                  date={post.date}
            />
        );
    });

    return (
        <div className={s.posts_container}>
            <div>Add new post:</div>
            <AddItemArea placeholder={"Add new post..."}
                addItem={props.addPost}
            />
            {postItems}
        </div>
    );
};
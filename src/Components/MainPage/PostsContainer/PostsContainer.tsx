import React from "react";
import s from "./PostsContainer.module.css";
import {Post} from "./Post/Post";
import {AddItemArea} from "../../common/AddItemArea/AddItemArea";
import {ActionsType, addPostAC, PostType} from "../../../redux/store";

type PostsContainerProps = {
    posts: PostType[]
    dispatch: (action: ActionsType) => void
}

export const PostsContainer: React.FC<PostsContainerProps> = (props) => {
    const addPost = (text: string) => {
        props.dispatch(addPostAC(text))
    }

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
                addItem={addPost}
            />
            {postItems}
        </div>
    );
};
import React from "react";
import s from "./MyPostsContainer.module.css";
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/mainPageReducer";
import AddItemForm, {AddItemFormData} from "../../common/AddItemForm/AddItemForm";
import {FormSubmitHandler} from "redux-form/lib/reduxForm";

type MyPostsProps = {
    posts: PostType[]
    addPost: (test: string) => void
}

export const MyPosts: React.FC<MyPostsProps> = (props) => {
    const postItems = props.posts.map((post, i) => {
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

    const addPostCallback: FormSubmitHandler<AddItemFormData> = (
        values,
        dispatch,
        formProps
    ) => {
        const clear = formProps.clearFields
        props.addPost(values.addItem)

        if (clear) clear(false, false, "addItem")
    }

    return (
        <div className={s.posts_container}>
            <div>Add new post:</div>
            <AddItemForm onSubmit={addPostCallback}/>
            {postItems}
        </div>
    )
}
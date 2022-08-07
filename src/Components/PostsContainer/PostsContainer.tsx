import React from "react";
import s from "./PostsContainer.module.css";
import {Post} from "../Post/Post";

export const PostsContainer = () => {
    return (
        <div className={s.posts_container}>
        <Post userName={"Vasya"} imageSrc={""} postText={"Lorem ipsum dolor sit amet"}/>
        <Post userName={"Vasya"} imageSrc={""} postText={"Lorem ipsum dolor sit amet"}/>
        <Post userName={"Vasya"} imageSrc={""} postText={"Lorem ipsum dolor sit amet"}/>
        <Post userName={"Vasya"} imageSrc={""} postText={"Lorem ipsum dolor sit amet"}/>
        <Post userName={"Vasya"} imageSrc={""} postText={"Lorem ipsum dolor sit amet"}/>
        <Post userName={"Vasya"} imageSrc={""} postText={"Lorem ipsum dolor sit amet"}/>
        </div>
    );
};
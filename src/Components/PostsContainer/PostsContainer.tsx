import React from "react";
import s from "./PostsContainer.module.css";
import {Post} from "../Post/Post";
import userImage from "../../images/Portrait_Placeholder.png";

export const PostsContainer = () => {
    return (
        <div className={s.posts_container}>
            Posts container:
        <Post userName={"Vasya"} imageSrc={userImage} postText={"Lorem ipsum dolor sit amet"} likesCount={1} date={"20.08.2022 22:30"}/>
        <Post userName={"Vasya"} imageSrc={userImage} postText={"Lorem ipsum dolor sit amet"} likesCount={1} date={"20.08.2022 22:30"}/>
        <Post userName={"Vasya"} imageSrc={userImage} postText={"Lorem ipsum dolor sit amet"} likesCount={1} date={"20.08.2022 22:30"}/>
        <Post userName={"Vasya"} imageSrc={userImage} postText={"Lorem ipsum dolor sit amet"} likesCount={1} date={"20.08.2022 22:30"}/>
        <Post userName={"Vasya"} imageSrc={userImage} postText={"Lorem ipsum dolor sit amet"} likesCount={1} date={"20.08.2022 22:30"}/>
        <Post userName={"Vasya"} imageSrc={userImage} postText={"Lorem ipsum dolor sit amet"} likesCount={1} date={"20.08.2022 22:30"}/>
        </div>
    );
};
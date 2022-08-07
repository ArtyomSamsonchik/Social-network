import React from "react";
import s from "./MainContent.module.css";
import {Profile} from "../ProfileInfo/Profile";

export const MainContent = () => {
    return (
        <div className={s.main_content}>
            Main content
            <Profile/>
            <div>
                Posts
                <div>post1</div>
                <div>post2</div>
                <div>post3</div>
                <div>post4</div>
                <div>post5</div>
            </div>
        </div>
    )
}
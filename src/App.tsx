import React from 'react';
import s from './App.module.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {MainPage} from "./Components/MainPage/MainPage";
import {Footer} from "./Components/Footer/Footer";
import {DialogsPage} from "./Components/DialogsPage/DialogsPage";
import {BrowserRouter, Route} from "react-router-dom";
import {MusicPage} from "./Components/MusicPage/MusicPage";
import {PhotosPage} from "./Components/PhotosPage/PhotosPage";
import {FriendsPage} from "./Components/FriendsPage/FriendsPage";
import {SettingsPage} from "./Components/SettingsPage/SettingsPage";
import userImageURL from "./images/Portrait_Placeholder.png"

export type UserType = {
    id: number,
    name: string
}

export type PostType = {
    userName: string
    imageSrc: string
    text: string
    date: string
    likesCount: number
}

function App() {

    const usersData: UserType[] = [
        {id: 1, name: "Sanya"},
        {id: 2, name: "Artyom"},
        {id: 3, name: "Ilya"},
        {id: 4, name: "Anton"},
        {id: 5, name: "Leha"}
    ];
    const postsData: PostType[] = [
        {
            userName: "Vasya",
            imageSrc: userImageURL,
            date: "01.09.2022 22:30",
            text: "Lorem ipsum dolor sit amet",
            likesCount: 10
        },
        {
            userName: "Sanya",
            imageSrc: userImageURL,
            date: "03.11.2022 00:30",
            text: "Lorem ipsum dolor sit amet",
            likesCount: 1
        },
        {
            userName: "Anton",
            imageSrc: userImageURL,
            date: "05.05.2022 19:50",
            text: "Lorem ipsum dolor sit amet",
            likesCount: 0
        },
        {
            userName: "Atryom",
            imageSrc: userImageURL,
            date: "20.07.2022 05:15",
            text: "Lorem ipsum dolor sit amet",
            likesCount: 2
        },
        {
            userName: "Ilya",
            imageSrc: userImageURL,
            date: "31.12.2022 18:30",
            text: "Lorem ipsum dolor sit amet",
            likesCount: 9
        },
        {
            userName: "Vasya",
            imageSrc: userImageURL,
            date: "15.10.2022 03:00",
            text: "Lorem ipsum dolor sit amet",
            likesCount: 3
        },
    ]

    return (
        <BrowserRouter>
            <div className={s.app}>
                <Header/>
                <Navbar/>
                <div className={s.main_content}>
                    <Route path={"/main_page"} render={() => <MainPage posts={postsData}/>}/>
                    <Route path={"/dialogs"} render={() => <DialogsPage users={usersData}/>}/>
                    <Route path={"/music"} render={MusicPage}/>
                    <Route path={"/photos"} render={PhotosPage}/>
                    <Route path={"/friends"} render={FriendsPage}/>
                    <Route path={"/settings"} render={SettingsPage}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    )
        ;
}

export default App;

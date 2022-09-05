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
import userImageURL from "./images/Portrait_Placeholder.png";

export type UserType = {
    id: number,
    name: string
}

export type PostType = {
    userName: string
    imageSrc: string
    postText: string
    date: string
    likesCount: number
}

export type MessageType = {
    userName: string
    messageText: string
}

export const PATH = {
    MAIN_PAGE: "/main-page",
    DIALOGS: "/dialogs",
    MUSIC: "/music",
    PHOTOS: "/photos",
    FRIENDS: "/friends",
    SETTINGS: "/settings"
};

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
            postText: "Lorem ipsum dolor sit amet",
            likesCount: 10
        },
        {
            userName: "Sanya",
            imageSrc: userImageURL,
            date: "03.11.2022 00:30",
            postText: "Lorem ipsum dolor sit amet",
            likesCount: 1
        },
        {
            userName: "Anton",
            imageSrc: userImageURL,
            date: "05.05.2022 19:50",
            postText: "Lorem ipsum dolor sit amet",
            likesCount: 0
        },
        {
            userName: "Atryom",
            imageSrc: userImageURL,
            date: "20.07.2022 05:15",
            postText: "Lorem ipsum dolor sit amet",
            likesCount: 2
        },
        {
            userName: "Ilya",
            imageSrc: userImageURL,
            date: "31.12.2022 18:30",
            postText: "Lorem ipsum dolor sit amet",
            likesCount: 9
        },
        {
            userName: "Vasya",
            imageSrc: userImageURL,
            date: "15.10.2022 03:00",
            postText: "Lorem ipsum dolor sit amet",
            likesCount: 3
        },
    ];
    const messages: MessageType[] = [
        {userName: "Sanya", messageText: "Hello"},
        {userName: "Sanya", messageText: "What's up?"},
        {userName: "Sanya", messageText: "How are you?"},
        {userName: "Sanya", messageText: "When we go to drink?"},
    ];

    return (
        <BrowserRouter>
            <div className={s.app}>
                <Header/>
                <Navbar/>
                <div className={s.main_content}>
                    <Route path={PATH.MAIN_PAGE} render={() => <MainPage posts={postsData}/>}/>
                    <Route path={PATH.DIALOGS}
                           render={() => <DialogsPage users={usersData} messages={messages}/>}
                    />
                    <Route path={PATH.MUSIC} render={MusicPage}/>
                    <Route path={PATH.PHOTOS} render={PhotosPage}/>
                    <Route path={PATH.FRIENDS} render={FriendsPage}/>
                    <Route path={PATH.SETTINGS} render={SettingsPage}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;

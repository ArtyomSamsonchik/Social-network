import React, {useState} from 'react';
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
import {PostType, state, UserType} from "./redux/state";

export const PATH = {
    MAIN_PAGE: "/main-page",
    DIALOGS: "/dialogs",
    MUSIC: "/music",
    PHOTOS: "/photos",
    FRIENDS: "/friends",
    SETTINGS: "/settings"
};

function App() {
    const [localState, setLocalState] = useState(state);

    const addPost = (postText: string) => {
        const user = localState.dialogsPageData.users[1];
        const date = new Date().toLocaleString("ru-RU")
        const newPost: PostType = {user, postText, date, likesCount: 0};

        setLocalState({
            ...localState,
            mainPageData: {
                ...localState.mainPageData,
                posts: [
                    newPost,
                    ...localState.mainPageData.posts
                ]
            }
        });
    };

    const addMessage = (user: UserType, messageText: string) => {
        const newMessage = {authorName: user.name, messageText};

        setLocalState({
            ...localState,
            dialogsPageData: {
                ...localState.dialogsPageData,
                dialogs: {
                    ...localState.dialogsPageData.dialogs,
                    [user.id]: [
                        ...localState.dialogsPageData.dialogs[user.id],
                        newMessage
                    ]
                }
            }
        });
    };

    return (
        <BrowserRouter>
            <div className={s.app}>
                <Header/>
                <Navbar users={localState.sidebarPageData.users}/>
                <div className={s.main_content}>
                    <Route path={PATH.MAIN_PAGE}
                           render={() => <MainPage pageData={localState.mainPageData}
                                                   addPost={addPost}
                           />
                           }/>
                    <Route path={PATH.DIALOGS}
                           render={() => <DialogsPage pageData={localState.dialogsPageData}
                                                      addMessage={addMessage}
                           />
                           }/>
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

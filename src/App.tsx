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
import {state} from "./redux/state";

export const PATH = {
    MAIN_PAGE: "/main-page",
    DIALOGS: "/dialogs",
    MUSIC: "/music",
    PHOTOS: "/photos",
    FRIENDS: "/friends",
    SETTINGS: "/settings"
};

function App() {
    return (
        <BrowserRouter>
            <div className={s.app}>
                <Header/>
                <Navbar/>
                <div className={s.main_content}>
                    <Route path={PATH.MAIN_PAGE} render={() => <MainPage pageData={state.mainPageData}/>}/>
                    <Route path={PATH.DIALOGS}
                           render={() => <DialogsPage pageData={state.dialogsPageData}/>}
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

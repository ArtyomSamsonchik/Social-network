import React from 'react';
import s from './App.module.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {MainPage} from "./Components/MainPage/MainPage";
import {Footer} from "./Components/Footer/Footer";
import {MessagesPage} from "./Components/MessagesPage/MessagesPage";
import {BrowserRouter, Route} from "react-router-dom";
import {MusicPage} from "./Components/MusicPage/MusicPage";
import {PhotosPage} from "./Components/PhotosPage/PhotosPage";
import {FriendsPage} from "./Components/FriendsPage/FriendsPage";
import {SettingsPage} from "./Components/SettingsPage/SettingsPage";

function App() {
    return (
        <BrowserRouter>
            <div className={s.app}>
                <Header/>
                <Navbar/>
                <div className={s.main_content}>
                    <Route path={"/main_page"} component={MainPage}/>
                    <Route path={"/messages"} component={MessagesPage}/>
                    <Route path={"/music"} component={MusicPage}/>
                    <Route path={"/photos"} component={PhotosPage}/>
                    <Route path={"/friends"} component={FriendsPage}/>
                    <Route path={"/settings"} component={SettingsPage}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    )
        ;
}

export default App;

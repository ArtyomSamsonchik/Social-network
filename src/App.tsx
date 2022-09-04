import React from 'react';
import s from './App.module.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {MainPage} from "./Components/MainPage/MainPage";
import {Footer} from "./Components/Footer/Footer";
import {DialogsPage} from "./Components/MessagesPage/DialogsPage";
import {BrowserRouter, Route} from "react-router-dom";
import {MusicPage} from "./Components/MusicPage/MusicPage";
import {PhotosPage} from "./Components/PhotosPage/PhotosPage";
import {FriendsPage} from "./Components/FriendsPage/FriendsPage";
import {SettingsPage} from "./Components/SettingsPage/SettingsPage";

export type User = {
    id: number,
    name: string
}

function App() {
    const UsersData: User[] = [
        {id: 1, name: "Sanya"},
        {id: 2, name: "Artyom"},
        {id: 3, name: "Ilya"},
        {id: 4, name: "Anton"},
        {id: 5, name: "Leha"}
    ]

    return (
        <BrowserRouter>
            <div className={s.app}>
                <Header/>
                <Navbar/>
                <div className={s.main_content}>
                    <Route path={"/main_page"} component={MainPage}/>
                    <Route path={"/dialogs"}
                           component={() => <DialogsPage users={UsersData}/>}
                    />
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

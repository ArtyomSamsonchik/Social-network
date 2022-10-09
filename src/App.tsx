import React, {useState} from 'react'
import s from './App.module.css'
import {Header} from "./Components/Header/Header"
import {Navbar} from "./Components/Navbar/Navbar"
import {MainPage} from "./Components/MainPage/MainPage"
import {Footer} from "./Components/Footer/Footer"
import {DialogsPage} from "./Components/DialogsPage/DialogsPage"
import {BrowserRouter, Route} from "react-router-dom"
import {MusicPage} from "./Components/MusicPage/MusicPage"
import {PhotosPage} from "./Components/PhotosPage/PhotosPage"
import {FriendsPage} from "./Components/FriendsPage/FriendsPage"
import {SettingsPage} from "./Components/SettingsPage/SettingsPage"
import store from "./redux/redux-store"

export const PATH = {
    MAIN_PAGE: "/main-page",
    DIALOGS: "/dialogs",
    MUSIC: "/music",
    PHOTOS: "/photos",
    FRIENDS: "/friends",
    SETTINGS: "/settings"
};

function App() {
    const [localState, setLocalState] = useState(store.getState());
    const dispatch = store.dispatch.bind(store)

    store.subscribe(() => {
        setLocalState(store.getState())
    })

    return (
        <BrowserRouter>
            <div className={s.app}>
                <Header/>
                <Navbar users={localState.sidebarPageData.users}/>
                <div className={s.main_content}>
                    <Route path={PATH.MAIN_PAGE}
                           render={() =>
                               <MainPage pageData={localState.mainPageData}
                                         dispatch={dispatch}
                               />
                           }
                    />
                    <Route path={PATH.DIALOGS}
                           render={() =>
                               <DialogsPage pageData={localState.dialogsPageData}
                                            dispatch={dispatch}
                               />
                           }
                    />
                    <Route path={PATH.MUSIC} render={MusicPage}/>
                    <Route path={PATH.PHOTOS} render={PhotosPage}/>
                    <Route path={PATH.FRIENDS} render={FriendsPage}/>
                    <Route path={PATH.SETTINGS} render={SettingsPage}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default App

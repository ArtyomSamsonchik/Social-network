import React from 'react';
import s from './App.module.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {MainPage} from "./Components/MainPage/MainPage";
import {Footer} from "./Components/Footer/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import {MusicPage} from "./Components/MusicPage/MusicPage";
import {PhotosPage} from "./Components/PhotosPage/PhotosPage";
import {UsersPage} from "./Components/UsersPage/UsersPage";
import {SettingsPage} from "./Components/SettingsPage/SettingsPage";
import DialogsPageContainer from "./Components/DialogsPage/DialogsPageContainer";
import store from "./redux/redux-store";
import {Provider} from "react-redux";

export const PATH = {
    MAIN_PAGE: "/main-page",
    DIALOGS: "/dialogs",
    MUSIC: "/music",
    PHOTOS: "/photos",
    FRIENDS: "/friends",
    SETTINGS: "/settings"
};

function App() {
    // const [localState, setLocalState] = useState(store.getState());
    //
    // useEffect(() => {
    //     return store.subscribe(() => {
    //         setLocalState(store.getState())
    //     })
    // }, [])

    return (
        <BrowserRouter>
            <Provider store={store}>
                <div className={s.app}>
                    <Header/>
                    <Navbar/>
                    <div className={s.main_content}>
                        <Route path={PATH.MAIN_PAGE}
                               render={() => <MainPage/>}
                        />
                        <Route path={PATH.DIALOGS}
                               render={() => <DialogsPageContainer/>}
                        />
                        <Route path={PATH.MUSIC} render={MusicPage}/>
                        <Route path={PATH.PHOTOS} render={PhotosPage}/>
                        <Route path={PATH.FRIENDS} render={UsersPage}/>
                        <Route path={PATH.SETTINGS} render={SettingsPage}/>
                    </div>
                    <Footer/>
                </div>
            </Provider>
        </BrowserRouter>
    )
}

export default App

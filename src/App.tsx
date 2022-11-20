import React from 'react';
import s from './App.module.css';
import {Navbar} from "./Components/Navbar/Navbar";
import {Footer} from "./Components/Footer/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import {MusicPage} from "./Components/MusicPage/MusicPage";
import {PhotosPage} from "./Components/PhotosPage/PhotosPage";
import {SettingsPage} from "./Components/SettingsPage/SettingsPage";
import ConnectedDialogsPage from "./Components/DialogsPage/ConnectedDialogsPage";
import store from "./redux/redux-store";
import {Provider} from "react-redux";
import ConnectedUsersPageContainer from "./Components/UsersPage/ConnectedUsersPageContainer";
import ConnectedMainPageContainer from "./Components/MainPage/ConnectedMainPageContainer";
import {ConnectedHeader} from "./Components/Header/ConnectedHeader";
import LoginForm, {LoginFormData} from "./Components/common/LoginForm/LoginForm";
import {FormSubmitHandler} from "redux-form/lib/reduxForm";
import {login} from "./redux/authReducer";

export const URL_PARAMETERS = {
    USER_ID: "/:userId?"
} as const

export const PATH = {
    MAIN_PAGE: "/main-page",
    DIALOGS: "/dialogs",
    MUSIC: "/music",
    PHOTOS: "/photos",
    FRIENDS: "/friends",
    SETTINGS: "/settings",
    LOGIN: "/login"
} as const;

function App() {
    const mainPageURL = PATH.MAIN_PAGE + URL_PARAMETERS.USER_ID

    const onSubmitHandler: FormSubmitHandler<LoginFormData> = (values, dispatch) => {
        return new Promise(res => {
            dispatch(login(values, res))
        })
    }

    return (
        <BrowserRouter>
            <Provider store={store}>
                <div className={s.app}>
                    <ConnectedHeader/>
                    <Navbar/>
                    {/*TODO:Maybe change div tag to main in future*/}
                    <div className={s.main_content}>
                        <Route path={mainPageURL} render={() => <ConnectedMainPageContainer/>}/>
                        <Route path={PATH.DIALOGS} render={() => <ConnectedDialogsPage/>}/>
                        <Route path={PATH.MUSIC} render={MusicPage}/>
                        <Route path={PATH.PHOTOS} render={PhotosPage}/>
                        <Route path={PATH.FRIENDS} render={() => <ConnectedUsersPageContainer/>}/>
                        <Route path={PATH.SETTINGS} render={SettingsPage}/>
                        <Route path={PATH.LOGIN} render={() => <LoginForm onSubmit={onSubmitHandler}/>}/>
                    </div>
                    <Footer/>
                </div>
            </Provider>
        </BrowserRouter>
    )
}

export default App

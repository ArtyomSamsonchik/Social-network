import React from 'react';
import s from './App.module.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {MainPage} from "./Components/MainContent/MainPage";
import {Footer} from "./Components/Footer/Footer";
import {Messages} from "./Components/Messages/Messages";
import {BrowserRouter, Route} from "react-router-dom";
import {Music} from "./Components/Music/Music";
import {Photos} from "./Components/Photos/Photos";
import {Friends} from "./Components/Friends/Friends";
import {Settings} from "./Components/Settings/Settings";

export type NavbarPages = "Main page"
    | "Messages"
    | "Music"
    | "Photos"
    | "Friends"
    | "Settings"

function App() {
  return (
      <BrowserRouter>
          <div className={s.app}>
              <Header/>
              <Navbar selectedPage={"Main page"}/>
              <div className={s.main_content}>
                  <Route path={"/main_page"} component={MainPage}/>
                  <Route path={"/messages"} component={Messages}/>
                  <Route path={"/music"} component={Music}/>
                  <Route path={"/photos"} component={Photos}/>
                  <Route path={"/friends"} component={Friends}/>
                  <Route path={"/settings"} component={Settings}/>

              </div>
              <Footer/>
          </div>
      </BrowserRouter>
  );
}

export default App;

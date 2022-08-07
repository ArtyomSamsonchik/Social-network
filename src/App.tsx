import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {MainContent} from "./Components/MainContent/MainContent";
import {Footer} from "./Components/Footer/Footer";

function App() {
  return (
    <div className="app">
        <Header/>
        <Navbar/>
        <MainContent/>
        <Footer/>
    </div>
  );
}

export default App;

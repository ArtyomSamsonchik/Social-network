import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
        <div className={"header"}>Header</div>
        <aside className={"navbar"}>
            <nav>
                <ul>
                    <li>Мой профиль</li>
                    <li>Сообщения</li>
                    <li>Новости</li>
                    <li>Музыка</li>
                    <li>Фотографии</li>
                    <li>Друзья</li>
                </ul>
            </nav></aside>
        <div className={"main-content"}>Main</div>
        <div className={"footer"}>Footer</div>
    </div>
  );
}

export default App;

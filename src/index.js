import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import Game from './components/Game.js';
import Header from './components/Header.js';


function Root() {
    return (<>
        <Header/>
        <Game/>
    </>)
}


// Render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render (<Root/>)